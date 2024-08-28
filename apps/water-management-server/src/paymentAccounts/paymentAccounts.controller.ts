import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentAccountsService } from "./paymentAccounts.service";
import { PaymentAccountsControllerBase } from "./base/paymentAccounts.controller.base";

@swagger.ApiTags("paymentAccounts")
@common.Controller("paymentAccounts")
export class PaymentAccountsController extends PaymentAccountsControllerBase {
  constructor(
    protected readonly service: PaymentAccountsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
