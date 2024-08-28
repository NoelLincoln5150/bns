import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { B2bTransactionsResolverBase } from "./base/b2bTransactions.resolver.base";
import { B2bTransactions } from "./base/B2bTransactions";
import { B2bTransactionsService } from "./b2bTransactions.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => B2bTransactions)
export class B2bTransactionsResolver extends B2bTransactionsResolverBase {
  constructor(
    protected readonly service: B2bTransactionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
