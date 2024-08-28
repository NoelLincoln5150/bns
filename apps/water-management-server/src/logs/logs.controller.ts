import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LogsService } from "./logs.service";
import { LogsControllerBase } from "./base/logs.controller.base";

@swagger.ApiTags("logs")
@common.Controller("logs")
export class LogsController extends LogsControllerBase {
  constructor(
    protected readonly service: LogsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
