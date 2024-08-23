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
import { UsageController } from "../usage.controller";
import { UsageService } from "../usage.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amountUsed: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  meterRelation: "exampleMeterRelation",
  updatedAt: new Date(),
  usageDate: new Date(),
};
const CREATE_RESULT = {
  amountUsed: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  meterRelation: "exampleMeterRelation",
  updatedAt: new Date(),
  usageDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amountUsed: 42.42,
    createdAt: new Date(),
    id: "exampleId",
    meterRelation: "exampleMeterRelation",
    updatedAt: new Date(),
    usageDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amountUsed: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  meterRelation: "exampleMeterRelation",
  updatedAt: new Date(),
  usageDate: new Date(),
};

const service = {
  createUsage() {
    return CREATE_RESULT;
  },
  usages: () => FIND_MANY_RESULT,
  usage: ({ where }: { where: { id: string } }) => {
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

describe("Usage", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UsageService,
          useValue: service,
        },
      ],
      controllers: [UsageController],
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

  test("POST /usages", async () => {
    await request(app.getHttpServer())
      .post("/usages")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        usageDate: CREATE_RESULT.usageDate.toISOString(),
      });
  });

  test("GET /usages", async () => {
    await request(app.getHttpServer())
      .get("/usages")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          usageDate: FIND_MANY_RESULT[0].usageDate.toISOString(),
        },
      ]);
  });

  test("GET /usages/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/usages"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /usages/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/usages"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        usageDate: FIND_ONE_RESULT.usageDate.toISOString(),
      });
  });

  test("POST /usages existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/usages")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        usageDate: CREATE_RESULT.usageDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/usages")
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
