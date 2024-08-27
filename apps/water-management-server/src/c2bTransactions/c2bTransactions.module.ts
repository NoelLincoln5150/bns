import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { C2bTransactionsModuleBase } from "./base/c2bTransactions.module.base";
import { C2bTransactionsService } from "./c2bTransactions.service";
import { C2bTransactionsController } from "./c2bTransactions.controller";
import { C2bTransactionsResolver } from "./c2bTransactions.resolver";

@Module({
  imports: [C2bTransactionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [C2bTransactionsController],
  providers: [C2bTransactionsService, C2bTransactionsResolver],
  exports: [C2bTransactionsService],
})
export class C2bTransactionsModule {}
