import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerMeterModuleBase } from "./base/customerMeter.module.base";
import { CustomerMeterService } from "./customerMeter.service";
import { CustomerMeterController } from "./customerMeter.controller";
import { CustomerMeterResolver } from "./customerMeter.resolver";

@Module({
  imports: [CustomerMeterModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerMeterController],
  providers: [CustomerMeterService, CustomerMeterResolver],
  exports: [CustomerMeterService],
})
export class CustomerMeterModule {}
