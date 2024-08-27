import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PersonalAccessTokensResolverBase } from "./base/personalAccessTokens.resolver.base";
import { PersonalAccessTokens } from "./base/PersonalAccessTokens";
import { PersonalAccessTokensService } from "./personalAccessTokens.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PersonalAccessTokens)
export class PersonalAccessTokensResolver extends PersonalAccessTokensResolverBase {
  constructor(
    protected readonly service: PersonalAccessTokensService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
