import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransactionCostsService } from "./transactionCosts.service";
import { TransactionCostsControllerBase } from "./base/transactionCosts.controller.base";

@swagger.ApiTags("transactionCosts")
@common.Controller("transactionCosts")
export class TransactionCostsController extends TransactionCostsControllerBase {
  constructor(
    protected readonly service: TransactionCostsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
