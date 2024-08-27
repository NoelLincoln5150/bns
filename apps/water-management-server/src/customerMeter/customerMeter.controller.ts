import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerMeterService } from "./customerMeter.service";
import { CustomerMeterControllerBase } from "./base/customerMeter.controller.base";

@swagger.ApiTags("customerMeters")
@common.Controller("customerMeters")
export class CustomerMeterController extends CustomerMeterControllerBase {
  constructor(
    protected readonly service: CustomerMeterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
