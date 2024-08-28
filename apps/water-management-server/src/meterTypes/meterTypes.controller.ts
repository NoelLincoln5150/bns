import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MeterTypesService } from "./meterTypes.service";
import { MeterTypesControllerBase } from "./base/meterTypes.controller.base";

@swagger.ApiTags("meterTypes")
@common.Controller("meterTypes")
export class MeterTypesController extends MeterTypesControllerBase {
  constructor(
    protected readonly service: MeterTypesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
