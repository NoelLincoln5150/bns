import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WaterTokensService } from "./waterTokens.service";
import { WaterTokensControllerBase } from "./base/waterTokens.controller.base";

@swagger.ApiTags("waterTokens")
@common.Controller("waterTokens")
export class WaterTokensController extends WaterTokensControllerBase {
  constructor(
    protected readonly service: WaterTokensService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
