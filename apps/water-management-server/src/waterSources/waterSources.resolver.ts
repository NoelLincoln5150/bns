import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WaterSourcesResolverBase } from "./base/waterSources.resolver.base";
import { WaterSources } from "./base/WaterSources";
import { WaterSourcesService } from "./waterSources.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WaterSources)
export class WaterSourcesResolver extends WaterSourcesResolverBase {
  constructor(
    protected readonly service: WaterSourcesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
