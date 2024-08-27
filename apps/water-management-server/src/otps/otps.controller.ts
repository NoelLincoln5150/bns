import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OtpsService } from "./otps.service";
import { OtpsControllerBase } from "./base/otps.controller.base";

@swagger.ApiTags("otps")
@common.Controller("otps")
export class OtpsController extends OtpsControllerBase {
  constructor(
    protected readonly service: OtpsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
