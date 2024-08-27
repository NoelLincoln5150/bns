import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductListStockModuleBase } from "./base/productListStock.module.base";
import { ProductListStockService } from "./productListStock.service";
import { ProductListStockController } from "./productListStock.controller";
import { ProductListStockResolver } from "./productListStock.resolver";

@Module({
  imports: [ProductListStockModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductListStockController],
  providers: [ProductListStockService, ProductListStockResolver],
  exports: [ProductListStockService],
})
export class ProductListStockModule {}
