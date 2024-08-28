import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrepaidMeterService } from "./prepaidMeter.service";
import { PrepaidMeterControllerBase } from "./base/prepaidMeter.controller.base";

@swagger.ApiTags("prepaidMeters")
@common.Controller("prepaidMeters")
export class PrepaidMeterController extends PrepaidMeterControllerBase {
  constructor(
    protected readonly service: PrepaidMeterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
