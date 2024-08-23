import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PrepaidMeterModuleBase } from "./base/prepaidMeter.module.base";
import { PrepaidMeterService } from "./prepaidMeter.service";
import { PrepaidMeterController } from "./prepaidMeter.controller";
import { PrepaidMeterResolver } from "./prepaidMeter.resolver";

@Module({
  imports: [PrepaidMeterModuleBase, forwardRef(() => AuthModule)],
  controllers: [PrepaidMeterController],
  providers: [PrepaidMeterService, PrepaidMeterResolver],
  exports: [PrepaidMeterService],
})
export class PrepaidMeterModule {}
