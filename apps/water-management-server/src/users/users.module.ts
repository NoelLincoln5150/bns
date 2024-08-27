import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsersModuleBase } from "./base/users.module.base";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersResolver } from "./users.resolver";

@Module({
  imports: [UsersModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
