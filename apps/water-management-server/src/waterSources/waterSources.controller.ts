import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WaterSourcesService } from "./waterSources.service";
import { WaterSourcesControllerBase } from "./base/waterSources.controller.base";

@swagger.ApiTags("waterSources")
@common.Controller("waterSources")
export class WaterSourcesController extends WaterSourcesControllerBase {
  constructor(
    protected readonly service: WaterSourcesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
