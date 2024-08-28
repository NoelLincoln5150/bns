import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StocksModuleBase } from "./base/stocks.module.base";
import { StocksService } from "./stocks.service";
import { StocksController } from "./stocks.controller";
import { StocksResolver } from "./stocks.resolver";

@Module({
  imports: [StocksModuleBase, forwardRef(() => AuthModule)],
  controllers: [StocksController],
  providers: [StocksService, StocksResolver],
  exports: [StocksService],
})
export class StocksModule {}
