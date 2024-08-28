import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MetersModuleBase } from "./base/meters.module.base";
import { MetersService } from "./meters.service";
import { MetersController } from "./meters.controller";
import { MetersResolver } from "./meters.resolver";

@Module({
  imports: [MetersModuleBase, forwardRef(() => AuthModule)],
  controllers: [MetersController],
  providers: [MetersService, MetersResolver],
  exports: [MetersService],
})
export class MetersModule {}
