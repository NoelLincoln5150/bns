import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentChannelsService } from "./paymentChannels.service";
import { PaymentChannelsControllerBase } from "./base/paymentChannels.controller.base";

@swagger.ApiTags("paymentChannels")
@common.Controller("paymentChannels")
export class PaymentChannelsController extends PaymentChannelsControllerBase {
  constructor(
    protected readonly service: PaymentChannelsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
