import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WaterMeterResolverBase } from "./base/waterMeter.resolver.base";
import { WaterMeter } from "./base/WaterMeter";
import { WaterMeterService } from "./waterMeter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WaterMeter)
export class WaterMeterResolver extends WaterMeterResolverBase {
  constructor(
    protected readonly service: WaterMeterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
