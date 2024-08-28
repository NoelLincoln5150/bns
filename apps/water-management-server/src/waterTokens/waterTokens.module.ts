import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WaterTokensModuleBase } from "./base/waterTokens.module.base";
import { WaterTokensService } from "./waterTokens.service";
import { WaterTokensController } from "./waterTokens.controller";
import { WaterTokensResolver } from "./waterTokens.resolver";

@Module({
  imports: [WaterTokensModuleBase, forwardRef(() => AuthModule)],
  controllers: [WaterTokensController],
  providers: [WaterTokensService, WaterTokensResolver],
  exports: [WaterTokensService],
})
export class WaterTokensModule {}
