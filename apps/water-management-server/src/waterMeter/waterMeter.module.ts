import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WaterMeterModuleBase } from "./base/waterMeter.module.base";
import { WaterMeterService } from "./waterMeter.service";
import { WaterMeterController } from "./waterMeter.controller";
import { WaterMeterResolver } from "./waterMeter.resolver";

@Module({
  imports: [WaterMeterModuleBase, forwardRef(() => AuthModule)],
  controllers: [WaterMeterController],
  providers: [WaterMeterService, WaterMeterResolver],
  exports: [WaterMeterService],
})
export class WaterMeterModule {}
