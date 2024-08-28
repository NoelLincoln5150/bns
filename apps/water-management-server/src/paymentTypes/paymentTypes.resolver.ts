import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentTypesResolverBase } from "./base/paymentTypes.resolver.base";
import { PaymentTypes } from "./base/PaymentTypes";
import { PaymentTypesService } from "./paymentTypes.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentTypes)
export class PaymentTypesResolver extends PaymentTypesResolverBase {
  constructor(
    protected readonly service: PaymentTypesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
