import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentAccountsModuleBase } from "./base/paymentAccounts.module.base";
import { PaymentAccountsService } from "./paymentAccounts.service";
import { PaymentAccountsController } from "./paymentAccounts.controller";
import { PaymentAccountsResolver } from "./paymentAccounts.resolver";

@Module({
  imports: [PaymentAccountsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentAccountsController],
  providers: [PaymentAccountsService, PaymentAccountsResolver],
  exports: [PaymentAccountsService],
})
export class PaymentAccountsModule {}
