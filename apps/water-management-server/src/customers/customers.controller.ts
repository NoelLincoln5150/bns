import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomersService } from "./customers.service";
import { CustomersControllerBase } from "./base/customers.controller.base";

@swagger.ApiTags("customers")
@common.Controller("customers")
export class CustomersController extends CustomersControllerBase {
  constructor(
    protected readonly service: CustomersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
