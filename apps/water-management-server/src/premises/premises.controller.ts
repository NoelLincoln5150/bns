import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PremisesService } from "./premises.service";
import { PremisesControllerBase } from "./base/premises.controller.base";

@swagger.ApiTags("premises")
@common.Controller("premises")
export class PremisesController extends PremisesControllerBase {
  constructor(
    protected readonly service: PremisesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
