import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AlertService } from "./alert.service";
import { AlertControllerBase } from "./base/alert.controller.base";

@swagger.ApiTags("alerts")
@common.Controller("alerts")
export class AlertController extends AlertControllerBase {
  constructor(
    protected readonly service: AlertService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
