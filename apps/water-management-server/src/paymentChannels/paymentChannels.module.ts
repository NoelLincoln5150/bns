import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentChannelsModuleBase } from "./base/paymentChannels.module.base";
import { PaymentChannelsService } from "./paymentChannels.service";
import { PaymentChannelsController } from "./paymentChannels.controller";
import { PaymentChannelsResolver } from "./paymentChannels.resolver";

@Module({
  imports: [PaymentChannelsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentChannelsController],
  providers: [PaymentChannelsService, PaymentChannelsResolver],
  exports: [PaymentChannelsService],
})
export class PaymentChannelsModule {}
