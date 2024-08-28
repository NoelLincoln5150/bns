import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PasswordResetsModuleBase } from "./base/passwordResets.module.base";
import { PasswordResetsService } from "./passwordResets.service";
import { PasswordResetsController } from "./passwordResets.controller";
import { PasswordResetsResolver } from "./passwordResets.resolver";

@Module({
  imports: [PasswordResetsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PasswordResetsController],
  providers: [PasswordResetsService, PasswordResetsResolver],
  exports: [PasswordResetsService],
})
export class PasswordResetsModule {}
