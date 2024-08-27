import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PremisesWaterSourceModuleBase } from "./base/premisesWaterSource.module.base";
import { PremisesWaterSourceService } from "./premisesWaterSource.service";
import { PremisesWaterSourceController } from "./premisesWaterSource.controller";
import { PremisesWaterSourceResolver } from "./premisesWaterSource.resolver";

@Module({
  imports: [PremisesWaterSourceModuleBase, forwardRef(() => AuthModule)],
  controllers: [PremisesWaterSourceController],
  providers: [PremisesWaterSourceService, PremisesWaterSourceResolver],
  exports: [PremisesWaterSourceService],
})
export class PremisesWaterSourceModule {}
