import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MigrationsService } from "./migrations.service";
import { MigrationsControllerBase } from "./base/migrations.controller.base";

@swagger.ApiTags("migrations")
@common.Controller("migrations")
export class MigrationsController extends MigrationsControllerBase {
  constructor(
    protected readonly service: MigrationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
