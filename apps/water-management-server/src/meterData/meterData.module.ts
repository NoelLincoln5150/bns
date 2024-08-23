import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MeterDataModuleBase } from "./base/meterData.module.base";
import { MeterDataService } from "./meterData.service";
import { MeterDataController } from "./meterData.controller";
import { MeterDataResolver } from "./meterData.resolver";

@Module({
  imports: [MeterDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [MeterDataController],
  providers: [MeterDataService, MeterDataResolver],
  exports: [MeterDataService],
})
export class MeterDataModule {}
