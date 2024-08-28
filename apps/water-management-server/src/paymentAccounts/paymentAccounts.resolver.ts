import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentAccountsResolverBase } from "./base/paymentAccounts.resolver.base";
import { PaymentAccounts } from "./base/PaymentAccounts";
import { PaymentAccountsService } from "./paymentAccounts.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentAccounts)
export class PaymentAccountsResolver extends PaymentAccountsResolverBase {
  constructor(
    protected readonly service: PaymentAccountsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
