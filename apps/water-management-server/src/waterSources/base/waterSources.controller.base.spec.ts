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
import { WaterSourcesController } from "../waterSources.controller";
import { WaterSourcesService } from "../waterSources.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  county: "exampleCounty",
  createdAt: new Date(),
  deletedAt: new Date(),
  elevation: 42.42,
  id: "exampleId",
  latitude: 42.42,
  localAddress: "exampleLocalAddress",
  longitude: 42.42,
  name: "exampleName",
  numberField: 42,
  region: "exampleRegion",
  subCounty: "exampleSubCounty",
  supplierNumber: "exampleSupplierNumber",
  town: "exampleTown",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  county: "exampleCounty",
  createdAt: new Date(),
  deletedAt: new Date(),
  elevation: 42.42,
  id: "exampleId",
  latitude: 42.42,
  localAddress: "exampleLocalAddress",
  longitude: 42.42,
  name: "exampleName",
  numberField: 42,
  region: "exampleRegion",
  subCounty: "exampleSubCounty",
  supplierNumber: "exampleSupplierNumber",
  town: "exampleTown",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    county: "exampleCounty",
    createdAt: new Date(),
    deletedAt: new Date(),
    elevation: 42.42,
    id: "exampleId",
    latitude: 42.42,
    localAddress: "exampleLocalAddress",
    longitude: 42.42,
    name: "exampleName",
    numberField: 42,
    region: "exampleRegion",
    subCounty: "exampleSubCounty",
    supplierNumber: "exampleSupplierNumber",
    town: "exampleTown",
    typeField: "exampleTypeField",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  county: "exampleCounty",
  createdAt: new Date(),
  deletedAt: new Date(),
  elevation: 42.42,
  id: "exampleId",
  latitude: 42.42,
  localAddress: "exampleLocalAddress",
  longitude: 42.42,
  name: "exampleName",
  numberField: 42,
  region: "exampleRegion",
  subCounty: "exampleSubCounty",
  supplierNumber: "exampleSupplierNumber",
  town: "exampleTown",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};

const service = {
  createWaterSources() {
    return CREATE_RESULT;
  },
  waterSourcesItems: () => FIND_MANY_RESULT,
  waterSources: ({ where }: { where: { id: string } }) => {
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

describe("WaterSources", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WaterSourcesService,
          useValue: service,
        },
      ],
      controllers: [WaterSourcesController],
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

  test("POST /waterSources", async () => {
    await request(app.getHttpServer())
      .post("/waterSources")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /waterSources", async () => {
    await request(app.getHttpServer())
      .get("/waterSources")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          deletedAt: FIND_MANY_RESULT[0].deletedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /waterSources/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/waterSources"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /waterSources/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/waterSources"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        deletedAt: FIND_ONE_RESULT.deletedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /waterSources existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/waterSources")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/waterSources")
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
