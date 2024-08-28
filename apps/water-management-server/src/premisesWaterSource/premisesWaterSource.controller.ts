import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PremisesWaterSourceService } from "./premisesWaterSource.service";
import { PremisesWaterSourceControllerBase } from "./base/premisesWaterSource.controller.base";

@swagger.ApiTags("premisesWaterSources")
@common.Controller("premisesWaterSources")
export class PremisesWaterSourceController extends PremisesWaterSourceControllerBase {
  constructor(
    protected readonly service: PremisesWaterSourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
