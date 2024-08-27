import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomersModuleBase } from "./base/customers.module.base";
import { CustomersService } from "./customers.service";
import { CustomersController } from "./customers.controller";
import { CustomersResolver } from "./customers.resolver";

@Module({
  imports: [CustomersModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomersController],
  providers: [CustomersService, CustomersResolver],
  exports: [CustomersService],
})
export class CustomersModule {}
