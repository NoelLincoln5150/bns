import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { B2bTransactionsService } from "./b2bTransactions.service";
import { B2bTransactionsControllerBase } from "./base/b2bTransactions.controller.base";

@swagger.ApiTags("b2bTransactions")
@common.Controller("b2bTransactions")
export class B2bTransactionsController extends B2bTransactionsControllerBase {
  constructor(
    protected readonly service: B2bTransactionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
