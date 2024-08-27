import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShortCodesService } from "./shortCodes.service";
import { ShortCodesControllerBase } from "./base/shortCodes.controller.base";

@swagger.ApiTags("shortCodes")
@common.Controller("shortCodes")
export class ShortCodesController extends ShortCodesControllerBase {
  constructor(
    protected readonly service: ShortCodesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
