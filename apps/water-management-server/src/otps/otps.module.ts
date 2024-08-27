import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OtpsModuleBase } from "./base/otps.module.base";
import { OtpsService } from "./otps.service";
import { OtpsController } from "./otps.controller";
import { OtpsResolver } from "./otps.resolver";

@Module({
  imports: [OtpsModuleBase, forwardRef(() => AuthModule)],
  controllers: [OtpsController],
  providers: [OtpsService, OtpsResolver],
  exports: [OtpsService],
})
export class OtpsModule {}
