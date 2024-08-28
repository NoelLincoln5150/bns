import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PrepaidMeterResolverBase } from "./base/prepaidMeter.resolver.base";
import { PrepaidMeter } from "./base/PrepaidMeter";
import { PrepaidMeterService } from "./prepaidMeter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PrepaidMeter)
export class PrepaidMeterResolver extends PrepaidMeterResolverBase {
  constructor(
    protected readonly service: PrepaidMeterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
