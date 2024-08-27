import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TaxablesService } from "./taxables.service";
import { TaxablesControllerBase } from "./base/taxables.controller.base";

@swagger.ApiTags("taxables")
@common.Controller("taxables")
export class TaxablesController extends TaxablesControllerBase {
  constructor(
    protected readonly service: TaxablesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
