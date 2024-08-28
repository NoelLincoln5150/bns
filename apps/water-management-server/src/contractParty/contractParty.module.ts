import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContractPartyModuleBase } from "./base/contractParty.module.base";
import { ContractPartyService } from "./contractParty.service";
import { ContractPartyController } from "./contractParty.controller";
import { ContractPartyResolver } from "./contractParty.resolver";

@Module({
  imports: [ContractPartyModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContractPartyController],
  providers: [ContractPartyService, ContractPartyResolver],
  exports: [ContractPartyService],
})
export class ContractPartyModule {}
