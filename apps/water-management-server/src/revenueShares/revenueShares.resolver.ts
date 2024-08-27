import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RevenueSharesResolverBase } from "./base/revenueShares.resolver.base";
import { RevenueShares } from "./base/RevenueShares";
import { RevenueSharesService } from "./revenueShares.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RevenueShares)
export class RevenueSharesResolver extends RevenueSharesResolverBase {
  constructor(
    protected readonly service: RevenueSharesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
