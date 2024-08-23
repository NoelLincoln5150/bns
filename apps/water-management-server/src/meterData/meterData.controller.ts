import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MeterDataService } from "./meterData.service";
import { MeterDataControllerBase } from "./base/meterData.controller.base";

@swagger.ApiTags("meterData")
@common.Controller("meterData")
export class MeterDataController extends MeterDataControllerBase {
  constructor(
    protected readonly service: MeterDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
