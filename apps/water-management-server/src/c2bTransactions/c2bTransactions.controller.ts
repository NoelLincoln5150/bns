import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { C2bTransactionsService } from "./c2bTransactions.service";
import { C2bTransactionsControllerBase } from "./base/c2bTransactions.controller.base";

@swagger.ApiTags("c2bTransactions")
@common.Controller("c2bTransactions")
export class C2bTransactionsController extends C2bTransactionsControllerBase {
  constructor(
    protected readonly service: C2bTransactionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
