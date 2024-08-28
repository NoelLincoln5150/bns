import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MeterService } from "./meter.service";
import { MeterControllerBase } from "./base/meter.controller.base";

@swagger.ApiTags("meters")
@common.Controller("meters")
export class MeterController extends MeterControllerBase {
  constructor(
    protected readonly service: MeterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
