import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { C2bTransactionsResolverBase } from "./base/c2bTransactions.resolver.base";
import { C2bTransactions } from "./base/C2bTransactions";
import { C2bTransactionsService } from "./c2bTransactions.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => C2bTransactions)
export class C2bTransactionsResolver extends C2bTransactionsResolverBase {
  constructor(
    protected readonly service: C2bTransactionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
