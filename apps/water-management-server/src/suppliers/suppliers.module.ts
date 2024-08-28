import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SuppliersModuleBase } from "./base/suppliers.module.base";
import { SuppliersService } from "./suppliers.service";
import { SuppliersController } from "./suppliers.controller";
import { SuppliersResolver } from "./suppliers.resolver";

@Module({
  imports: [SuppliersModuleBase, forwardRef(() => AuthModule)],
  controllers: [SuppliersController],
  providers: [SuppliersService, SuppliersResolver],
  exports: [SuppliersService],
})
export class SuppliersModule {}
