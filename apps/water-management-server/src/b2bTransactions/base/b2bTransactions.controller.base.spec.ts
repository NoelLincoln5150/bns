import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { B2bTransactionsController } from "../b2bTransactions.controller";
import { B2bTransactionsService } from "../b2bTransactions.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.42,
  c2bTransactionId: "exampleC2bTransactionId",
  completed: new Date(),
  confirmed: new Date(),
  contractNumber: "exampleContractNumber",
  conversationId: "exampleConversationId",
  createdAt: new Date(),
  deletedAt: new Date(),
  id: "exampleId",
  initiated: new Date(),
  message: "exampleMessage",
  paymentChannelId: "examplePaymentChannelId",
  share: 42.42,
  transactionDate: new Date(),
  transactionFee: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amount: 42.42,
  c2bTransactionId: "exampleC2bTransactionId",
  completed: new Date(),
  confirmed: new Date(),
  contractNumber: "exampleContractNumber",
  conversationId: "exampleConversationId",
  createdAt: new Date(),
  deletedAt: new Date(),
  id: "exampleId",
  initiated: new Date(),
  message: "exampleMessage",
  paymentChannelId: "examplePaymentChannelId",
  share: 42.42,
  transactionDate: new Date(),
  transactionFee: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amount: 42.42,
    c2bTransactionId: "exampleC2bTransactionId",
    completed: new Date(),
    confirmed: new Date(),
    contractNumber: "exampleContractNumber",
    conversationId: "exampleConversationId",
    createdAt: new Date(),
    deletedAt: new Date(),
    id: "exampleId",
    initiated: new Date(),
    message: "exampleMessage",
    paymentChannelId: "examplePaymentChannelId",
    share: 42.42,
    transactionDate: new Date(),
    transactionFee: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amount: 42.42,
  c2bTransactionId: "exampleC2bTransactionId",
  completed: new Date(),
  confirmed: new Date(),
  contractNumber: "exampleContractNumber",
  conversationId: "exampleConversationId",
  createdAt: new Date(),
  deletedAt: new Date(),
  id: "exampleId",
  initiated: new Date(),
  message: "exampleMessage",
  paymentChannelId: "examplePaymentChannelId",
  share: 42.42,
  transactionDate: new Date(),
  transactionFee: 42.42,
  updatedAt: new Date(),
};

const service = {
  createB2bTransactions() {
    return CREATE_RESULT;
  },
  b2bTransactionsItems: () => FIND_MANY_RESULT,
  b2bTransactions: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("B2bTransactions", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: B2bTransactionsService,
          useValue: service,
        },
      ],
      controllers: [B2bTransactionsController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /b2bTransactions", async () => {
    await request(app.getHttpServer())
      .post("/b2bTransactions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completed: CREATE_RESULT.completed.toISOString(),
        confirmed: CREATE_RESULT.confirmed.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        initiated: CREATE_RESULT.initiated.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /b2bTransactions", async () => {
    await request(app.getHttpServer())
      .get("/b2bTransactions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          completed: FIND_MANY_RESULT[0].completed.toISOString(),
          confirmed: FIND_MANY_RESULT[0].confirmed.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          deletedAt: FIND_MANY_RESULT[0].deletedAt.toISOString(),
          initiated: FIND_MANY_RESULT[0].initiated.toISOString(),
          transactionDate: FIND_MANY_RESULT[0].transactionDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /b2bTransactions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/b2bTransactions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /b2bTransactions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/b2bTransactions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        completed: FIND_ONE_RESULT.completed.toISOString(),
        confirmed: FIND_ONE_RESULT.confirmed.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        deletedAt: FIND_ONE_RESULT.deletedAt.toISOString(),
        initiated: FIND_ONE_RESULT.initiated.toISOString(),
        transactionDate: FIND_ONE_RESULT.transactionDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /b2bTransactions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/b2bTransactions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completed: CREATE_RESULT.completed.toISOString(),
        confirmed: CREATE_RESULT.confirmed.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        initiated: CREATE_RESULT.initiated.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/b2bTransactions")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
