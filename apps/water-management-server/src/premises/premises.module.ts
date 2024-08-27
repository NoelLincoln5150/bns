import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PremisesModuleBase } from "./base/premises.module.base";
import { PremisesService } from "./premises.service";
import { PremisesController } from "./premises.controller";
import { PremisesResolver } from "./premises.resolver";

@Module({
  imports: [PremisesModuleBase, forwardRef(() => AuthModule)],
  controllers: [PremisesController],
  providers: [PremisesService, PremisesResolver],
  exports: [PremisesService],
})
export class PremisesModule {}
