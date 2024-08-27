import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CategoryProductModuleBase } from "./base/categoryProduct.module.base";
import { CategoryProductService } from "./categoryProduct.service";
import { CategoryProductController } from "./categoryProduct.controller";
import { CategoryProductResolver } from "./categoryProduct.resolver";

@Module({
  imports: [CategoryProductModuleBase, forwardRef(() => AuthModule)],
  controllers: [CategoryProductController],
  providers: [CategoryProductService, CategoryProductResolver],
  exports: [CategoryProductService],
})
export class CategoryProductModule {}
