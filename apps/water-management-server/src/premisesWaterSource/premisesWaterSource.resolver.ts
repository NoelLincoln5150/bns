import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PremisesWaterSourceResolverBase } from "./base/premisesWaterSource.resolver.base";
import { PremisesWaterSource } from "./base/PremisesWaterSource";
import { PremisesWaterSourceService } from "./premisesWaterSource.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PremisesWaterSource)
export class PremisesWaterSourceResolver extends PremisesWaterSourceResolverBase {
  constructor(
    protected readonly service: PremisesWaterSourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
