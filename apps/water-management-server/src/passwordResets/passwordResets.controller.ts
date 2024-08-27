import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PasswordResetsService } from "./passwordResets.service";
import { PasswordResetsControllerBase } from "./base/passwordResets.controller.base";

@swagger.ApiTags("passwordResets")
@common.Controller("passwordResets")
export class PasswordResetsController extends PasswordResetsControllerBase {
  constructor(
    protected readonly service: PasswordResetsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
