import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SuppliersResolverBase } from "./base/suppliers.resolver.base";
import { Suppliers } from "./base/Suppliers";
import { SuppliersService } from "./suppliers.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Suppliers)
export class SuppliersResolver extends SuppliersResolverBase {
  constructor(
    protected readonly service: SuppliersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
