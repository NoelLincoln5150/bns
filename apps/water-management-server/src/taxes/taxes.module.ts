import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TaxesModuleBase } from "./base/taxes.module.base";
import { TaxesService } from "./taxes.service";
import { TaxesController } from "./taxes.controller";
import { TaxesResolver } from "./taxes.resolver";

@Module({
  imports: [TaxesModuleBase, forwardRef(() => AuthModule)],
  controllers: [TaxesController],
  providers: [TaxesService, TaxesResolver],
  exports: [TaxesService],
})
export class TaxesModule {}
