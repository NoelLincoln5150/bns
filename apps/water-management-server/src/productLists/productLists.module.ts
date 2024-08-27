import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductListsModuleBase } from "./base/productLists.module.base";
import { ProductListsService } from "./productLists.service";
import { ProductListsController } from "./productLists.controller";
import { ProductListsResolver } from "./productLists.resolver";

@Module({
  imports: [ProductListsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductListsController],
  providers: [ProductListsService, ProductListsResolver],
  exports: [ProductListsService],
})
export class ProductListsModule {}
