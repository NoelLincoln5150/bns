import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BankPaybillModuleBase } from "./base/bankPaybill.module.base";
import { BankPaybillService } from "./bankPaybill.service";
import { BankPaybillController } from "./bankPaybill.controller";
import { BankPaybillResolver } from "./bankPaybill.resolver";

@Module({
  imports: [BankPaybillModuleBase, forwardRef(() => AuthModule)],
  controllers: [BankPaybillController],
  providers: [BankPaybillService, BankPaybillResolver],
  exports: [BankPaybillService],
})
export class BankPaybillModule {}
