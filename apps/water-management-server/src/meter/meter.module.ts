import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MeterModuleBase } from "./base/meter.module.base";
import { MeterService } from "./meter.service";
import { MeterController } from "./meter.controller";
import { MeterResolver } from "./meter.resolver";

@Module({
  imports: [MeterModuleBase, forwardRef(() => AuthModule)],
  controllers: [MeterController],
  providers: [MeterService, MeterResolver],
  exports: [MeterService],
})
export class MeterModule {}
