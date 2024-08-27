import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentTypesService } from "./paymentTypes.service";
import { PaymentTypesControllerBase } from "./base/paymentTypes.controller.base";

@swagger.ApiTags("paymentTypes")
@common.Controller("paymentTypes")
export class PaymentTypesController extends PaymentTypesControllerBase {
  constructor(
    protected readonly service: PaymentTypesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
