import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PasswordResetTokensResolverBase } from "./base/passwordResetTokens.resolver.base";
import { PasswordResetTokens } from "./base/PasswordResetTokens";
import { PasswordResetTokensService } from "./passwordResetTokens.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PasswordResetTokens)
export class PasswordResetTokensResolver extends PasswordResetTokensResolverBase {
  constructor(
    protected readonly service: PasswordResetTokensService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
