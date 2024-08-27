import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentTypesModuleBase } from "./base/paymentTypes.module.base";
import { PaymentTypesService } from "./paymentTypes.service";
import { PaymentTypesController } from "./paymentTypes.controller";
import { PaymentTypesResolver } from "./paymentTypes.resolver";

@Module({
  imports: [PaymentTypesModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentTypesController],
  providers: [PaymentTypesService, PaymentTypesResolver],
  exports: [PaymentTypesService],
})
export class PaymentTypesModule {}
