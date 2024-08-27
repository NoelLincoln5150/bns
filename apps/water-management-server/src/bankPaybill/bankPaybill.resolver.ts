import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BankPaybillResolverBase } from "./base/bankPaybill.resolver.base";
import { BankPaybill } from "./base/BankPaybill";
import { BankPaybillService } from "./bankPaybill.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BankPaybill)
export class BankPaybillResolver extends BankPaybillResolverBase {
  constructor(
    protected readonly service: BankPaybillService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
