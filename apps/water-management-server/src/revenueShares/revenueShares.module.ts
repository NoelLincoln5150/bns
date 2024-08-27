import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RevenueSharesModuleBase } from "./base/revenueShares.module.base";
import { RevenueSharesService } from "./revenueShares.service";
import { RevenueSharesController } from "./revenueShares.controller";
import { RevenueSharesResolver } from "./revenueShares.resolver";

@Module({
  imports: [RevenueSharesModuleBase, forwardRef(() => AuthModule)],
  controllers: [RevenueSharesController],
  providers: [RevenueSharesService, RevenueSharesResolver],
  exports: [RevenueSharesService],
})
export class RevenueSharesModule {}
