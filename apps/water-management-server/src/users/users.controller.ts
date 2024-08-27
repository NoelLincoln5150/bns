import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsersService } from "./users.service";
import { UsersControllerBase } from "./base/users.controller.base";

@swagger.ApiTags("users")
@common.Controller("users")
export class UsersController extends UsersControllerBase {
  constructor(
    protected readonly service: UsersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
