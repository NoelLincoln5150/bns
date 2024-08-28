import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WaterSourcesModuleBase } from "./base/waterSources.module.base";
import { WaterSourcesService } from "./waterSources.service";
import { WaterSourcesController } from "./waterSources.controller";
import { WaterSourcesResolver } from "./waterSources.resolver";

@Module({
  imports: [WaterSourcesModuleBase, forwardRef(() => AuthModule)],
  controllers: [WaterSourcesController],
  providers: [WaterSourcesService, WaterSourcesResolver],
  exports: [WaterSourcesService],
})
export class WaterSourcesModule {}
