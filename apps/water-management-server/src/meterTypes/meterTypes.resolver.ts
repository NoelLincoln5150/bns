import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MeterTypesResolverBase } from "./base/meterTypes.resolver.base";
import { MeterTypes } from "./base/MeterTypes";
import { MeterTypesService } from "./meterTypes.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MeterTypes)
export class MeterTypesResolver extends MeterTypesResolverBase {
  constructor(
    protected readonly service: MeterTypesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
