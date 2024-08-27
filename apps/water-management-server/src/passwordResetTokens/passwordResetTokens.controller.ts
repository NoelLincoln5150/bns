import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PasswordResetTokensService } from "./passwordResetTokens.service";
import { PasswordResetTokensControllerBase } from "./base/passwordResetTokens.controller.base";

@swagger.ApiTags("passwordResetTokens")
@common.Controller("passwordResetTokens")
export class PasswordResetTokensController extends PasswordResetTokensControllerBase {
  constructor(
    protected readonly service: PasswordResetTokensService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
