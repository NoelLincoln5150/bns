import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PersonalAccessTokensModuleBase } from "./base/personalAccessTokens.module.base";
import { PersonalAccessTokensService } from "./personalAccessTokens.service";
import { PersonalAccessTokensController } from "./personalAccessTokens.controller";
import { PersonalAccessTokensResolver } from "./personalAccessTokens.resolver";

@Module({
  imports: [PersonalAccessTokensModuleBase, forwardRef(() => AuthModule)],
  controllers: [PersonalAccessTokensController],
  providers: [PersonalAccessTokensService, PersonalAccessTokensResolver],
  exports: [PersonalAccessTokensService],
})
export class PersonalAccessTokensModule {}
