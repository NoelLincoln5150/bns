import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { B2bTransactionsModuleBase } from "./base/b2bTransactions.module.base";
import { B2bTransactionsService } from "./b2bTransactions.service";
import { B2bTransactionsController } from "./b2bTransactions.controller";
import { B2bTransactionsResolver } from "./b2bTransactions.resolver";

@Module({
  imports: [B2bTransactionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [B2bTransactionsController],
  providers: [B2bTransactionsService, B2bTransactionsResolver],
  exports: [B2bTransactionsService],
})
export class B2bTransactionsModule {}
