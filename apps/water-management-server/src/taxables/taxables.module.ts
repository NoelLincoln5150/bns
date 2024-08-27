import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TaxablesModuleBase } from "./base/taxables.module.base";
import { TaxablesService } from "./taxables.service";
import { TaxablesController } from "./taxables.controller";
import { TaxablesResolver } from "./taxables.resolver";

@Module({
  imports: [TaxablesModuleBase, forwardRef(() => AuthModule)],
  controllers: [TaxablesController],
  providers: [TaxablesService, TaxablesResolver],
  exports: [TaxablesService],
})
export class TaxablesModule {}
