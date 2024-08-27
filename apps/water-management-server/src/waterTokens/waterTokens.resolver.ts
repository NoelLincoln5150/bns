import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WaterTokensResolverBase } from "./base/waterTokens.resolver.base";
import { WaterTokens } from "./base/WaterTokens";
import { WaterTokensService } from "./waterTokens.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WaterTokens)
export class WaterTokensResolver extends WaterTokensResolverBase {
  constructor(
    protected readonly service: WaterTokensService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
