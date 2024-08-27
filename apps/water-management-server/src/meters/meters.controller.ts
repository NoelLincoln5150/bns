import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MetersService } from "./meters.service";
import { MetersControllerBase } from "./base/meters.controller.base";

@swagger.ApiTags("meters")
@common.Controller("meters")
export class MetersController extends MetersControllerBase {
  constructor(
    protected readonly service: MetersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
