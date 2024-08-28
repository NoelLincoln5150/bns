import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PasswordResetTokensModuleBase } from "./base/passwordResetTokens.module.base";
import { PasswordResetTokensService } from "./passwordResetTokens.service";
import { PasswordResetTokensController } from "./passwordResetTokens.controller";
import { PasswordResetTokensResolver } from "./passwordResetTokens.resolver";

@Module({
  imports: [PasswordResetTokensModuleBase, forwardRef(() => AuthModule)],
  controllers: [PasswordResetTokensController],
  providers: [PasswordResetTokensService, PasswordResetTokensResolver],
  exports: [PasswordResetTokensService],
})
export class PasswordResetTokensModule {}
