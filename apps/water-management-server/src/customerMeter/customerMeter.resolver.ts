import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerMeterResolverBase } from "./base/customerMeter.resolver.base";
import { CustomerMeter } from "./base/CustomerMeter";
import { CustomerMeterService } from "./customerMeter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerMeter)
export class CustomerMeterResolver extends CustomerMeterResolverBase {
  constructor(
    protected readonly service: CustomerMeterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
