import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WaterMeterService } from "./waterMeter.service";
import { WaterMeterControllerBase } from "./base/waterMeter.controller.base";

@swagger.ApiTags("waterMeters")
@common.Controller("waterMeters")
export class WaterMeterController extends WaterMeterControllerBase {
  constructor(
    protected readonly service: WaterMeterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
