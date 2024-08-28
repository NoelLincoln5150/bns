import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TaxesService } from "./taxes.service";
import { TaxesControllerBase } from "./base/taxes.controller.base";

@swagger.ApiTags("taxes")
@common.Controller("taxes")
export class TaxesController extends TaxesControllerBase {
  constructor(
    protected readonly service: TaxesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
