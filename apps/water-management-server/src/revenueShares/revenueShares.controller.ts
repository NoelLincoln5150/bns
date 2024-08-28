import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RevenueSharesService } from "./revenueShares.service";
import { RevenueSharesControllerBase } from "./base/revenueShares.controller.base";

@swagger.ApiTags("revenueShares")
@common.Controller("revenueShares")
export class RevenueSharesController extends RevenueSharesControllerBase {
  constructor(
    protected readonly service: RevenueSharesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
