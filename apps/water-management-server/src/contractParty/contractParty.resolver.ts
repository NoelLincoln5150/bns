import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContractPartyResolverBase } from "./base/contractParty.resolver.base";
import { ContractParty } from "./base/ContractParty";
import { ContractPartyService } from "./contractParty.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContractParty)
export class ContractPartyResolver extends ContractPartyResolverBase {
  constructor(
    protected readonly service: ContractPartyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
