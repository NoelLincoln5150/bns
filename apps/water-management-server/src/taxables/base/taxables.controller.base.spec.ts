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
import { TaxablesController } from "../taxables.controller";
import { TaxablesService } from "../taxables.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  apply: "exampleApply",
  createdAt: new Date(),
  id: "exampleId",
  included: "true",
  rate: 42.42,
  taxId: "exampleTaxId",
  taxableId: "exampleTaxableId",
  taxableType: "exampleTaxableType",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  apply: "exampleApply",
  createdAt: new Date(),
  id: "exampleId",
  included: "true",
  rate: 42.42,
  taxId: "exampleTaxId",
  taxableId: "exampleTaxableId",
  taxableType: "exampleTaxableType",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    apply: "exampleApply",
    createdAt: new Date(),
    id: "exampleId",
    included: "true",
    rate: 42.42,
    taxId: "exampleTaxId",
    taxableId: "exampleTaxableId",
    taxableType: "exampleTaxableType",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  apply: "exampleApply",
  createdAt: new Date(),
  id: "exampleId",
  included: "true",
  rate: 42.42,
  taxId: "exampleTaxId",
  taxableId: "exampleTaxableId",
  taxableType: "exampleTaxableType",
  updatedAt: new Date(),
};

const service = {
  createTaxables() {
    return CREATE_RESULT;
  },
  taxablesItems: () => FIND_MANY_RESULT,
  taxables: ({ where }: { where: { id: string } }) => {
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

describe("Taxables", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TaxablesService,
          useValue: service,
        },
      ],
      controllers: [TaxablesController],
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

  test("POST /taxables", async () => {
    await request(app.getHttpServer())
      .post("/taxables")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /taxables", async () => {
    await request(app.getHttpServer())
      .get("/taxables")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /taxables/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/taxables"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /taxables/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/taxables"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /taxables existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/taxables")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/taxables")
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
