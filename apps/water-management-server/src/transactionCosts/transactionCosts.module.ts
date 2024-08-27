import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransactionCostsModuleBase } from "./base/transactionCosts.module.base";
import { TransactionCostsService } from "./transactionCosts.service";
import { TransactionCostsController } from "./transactionCosts.controller";
import { TransactionCostsResolver } from "./transactionCosts.resolver";

@Module({
  imports: [TransactionCostsModuleBase, forwardRef(() => AuthModule)],
  controllers: [TransactionCostsController],
  providers: [TransactionCostsService, TransactionCostsResolver],
  exports: [TransactionCostsService],
})
export class TransactionCostsModule {}
