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
import { PremisesController } from "../premises.controller";
import { PremisesService } from "../premises.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  contractNumber: "exampleContractNumber",
  county: "exampleCounty",
  createdAt: new Date(),
  elevation: "exampleElevation",
  id: "exampleId",
  latitude: "exampleLatitude",
  location: "exampleLocation",
  longitude: "exampleLongitude",
  phoneNumber: "examplePhoneNumber",
  region: "exampleRegion",
  subCounty: "exampleSubCounty",
  supplierNumber: "exampleSupplierNumber",
  town: "exampleTown",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  contractNumber: "exampleContractNumber",
  county: "exampleCounty",
  createdAt: new Date(),
  elevation: "exampleElevation",
  id: "exampleId",
  latitude: "exampleLatitude",
  location: "exampleLocation",
  longitude: "exampleLongitude",
  phoneNumber: "examplePhoneNumber",
  region: "exampleRegion",
  subCounty: "exampleSubCounty",
  supplierNumber: "exampleSupplierNumber",
  town: "exampleTown",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    contractNumber: "exampleContractNumber",
    county: "exampleCounty",
    createdAt: new Date(),
    elevation: "exampleElevation",
    id: "exampleId",
    latitude: "exampleLatitude",
    location: "exampleLocation",
    longitude: "exampleLongitude",
    phoneNumber: "examplePhoneNumber",
    region: "exampleRegion",
    subCounty: "exampleSubCounty",
    supplierNumber: "exampleSupplierNumber",
    town: "exampleTown",
    typeField: "exampleTypeField",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  contractNumber: "exampleContractNumber",
  county: "exampleCounty",
  createdAt: new Date(),
  elevation: "exampleElevation",
  id: "exampleId",
  latitude: "exampleLatitude",
  location: "exampleLocation",
  longitude: "exampleLongitude",
  phoneNumber: "examplePhoneNumber",
  region: "exampleRegion",
  subCounty: "exampleSubCounty",
  supplierNumber: "exampleSupplierNumber",
  town: "exampleTown",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};

const service = {
  createPremises() {
    return CREATE_RESULT;
  },
  premisesItems: () => FIND_MANY_RESULT,
  premises: ({ where }: { where: { id: string } }) => {
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

describe("Premises", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PremisesService,
          useValue: service,
        },
      ],
      controllers: [PremisesController],
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

  test("POST /premises", async () => {
    await request(app.getHttpServer())
      .post("/premises")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /premises", async () => {
    await request(app.getHttpServer())
      .get("/premises")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /premises/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/premises"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /premises/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/premises"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /premises existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/premises")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/premises")
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
