import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ShortCodesModuleBase } from "./base/shortCodes.module.base";
import { ShortCodesService } from "./shortCodes.service";
import { ShortCodesController } from "./shortCodes.controller";
import { ShortCodesResolver } from "./shortCodes.resolver";

@Module({
  imports: [ShortCodesModuleBase, forwardRef(() => AuthModule)],
  controllers: [ShortCodesController],
  providers: [ShortCodesService, ShortCodesResolver],
  exports: [ShortCodesService],
})
export class ShortCodesModule {}
