import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TransactionCostsResolverBase } from "./base/transactionCosts.resolver.base";
import { TransactionCosts } from "./base/TransactionCosts";
import { TransactionCostsService } from "./transactionCosts.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TransactionCosts)
export class TransactionCostsResolver extends TransactionCostsResolverBase {
  constructor(
    protected readonly service: TransactionCostsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
