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
import { LogsController } from "../logs.controller";
import { LogsService } from "../logs.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  action: "exampleAction",
  createdAt: new Date(),
  deletedAt: "exampleDeletedAt",
  id: "exampleId",
  ipAddress: 42.424242424,
  message: "exampleMessage",
  requestPayload: "exampleRequestPayload",
  resourceId: "exampleResourceId",
  resourceModel: "exampleResourceModel",
  updateValues: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  action: "exampleAction",
  createdAt: new Date(),
  deletedAt: "exampleDeletedAt",
  id: "exampleId",
  ipAddress: 42.424242424,
  message: "exampleMessage",
  requestPayload: "exampleRequestPayload",
  resourceId: "exampleResourceId",
  resourceModel: "exampleResourceModel",
  updateValues: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    action: "exampleAction",
    createdAt: new Date(),
    deletedAt: "exampleDeletedAt",
    id: "exampleId",
    ipAddress: 42.424242424,
    message: "exampleMessage",
    requestPayload: "exampleRequestPayload",
    resourceId: "exampleResourceId",
    resourceModel: "exampleResourceModel",
    updateValues: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  action: "exampleAction",
  createdAt: new Date(),
  deletedAt: "exampleDeletedAt",
  id: "exampleId",
  ipAddress: 42.424242424,
  message: "exampleMessage",
  requestPayload: "exampleRequestPayload",
  resourceId: "exampleResourceId",
  resourceModel: "exampleResourceModel",
  updateValues: new Date(),
  updatedAt: new Date(),
};

const service = {
  createLogs() {
    return CREATE_RESULT;
  },
  logsItems: () => FIND_MANY_RESULT,
  logs: ({ where }: { where: { id: string } }) => {
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

describe("Logs", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LogsService,
          useValue: service,
        },
      ],
      controllers: [LogsController],
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

  test("POST /logs", async () => {
    await request(app.getHttpServer())
      .post("/logs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updateValues: CREATE_RESULT.updateValues.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /logs", async () => {
    await request(app.getHttpServer())
      .get("/logs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updateValues: FIND_MANY_RESULT[0].updateValues.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /logs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/logs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /logs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/logs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updateValues: FIND_ONE_RESULT.updateValues.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /logs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/logs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updateValues: CREATE_RESULT.updateValues.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/logs")
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
