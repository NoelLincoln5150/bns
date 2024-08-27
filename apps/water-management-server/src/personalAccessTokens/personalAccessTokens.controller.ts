import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PersonalAccessTokensService } from "./personalAccessTokens.service";
import { PersonalAccessTokensControllerBase } from "./base/personalAccessTokens.controller.base";

@swagger.ApiTags("personalAccessTokens")
@common.Controller("personalAccessTokens")
export class PersonalAccessTokensController extends PersonalAccessTokensControllerBase {
  constructor(
    protected readonly service: PersonalAccessTokensService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
