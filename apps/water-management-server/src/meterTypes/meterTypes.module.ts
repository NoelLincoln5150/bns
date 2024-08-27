import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MeterTypesModuleBase } from "./base/meterTypes.module.base";
import { MeterTypesService } from "./meterTypes.service";
import { MeterTypesController } from "./meterTypes.controller";
import { MeterTypesResolver } from "./meterTypes.resolver";

@Module({
  imports: [MeterTypesModuleBase, forwardRef(() => AuthModule)],
  controllers: [MeterTypesController],
  providers: [MeterTypesService, MeterTypesResolver],
  exports: [MeterTypesService],
})
export class MeterTypesModule {}
