import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProductListStockResolverBase } from "./base/productListStock.resolver.base";
import { ProductListStock } from "./base/ProductListStock";
import { ProductListStockService } from "./productListStock.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductListStock)
export class ProductListStockResolver extends ProductListStockResolverBase {
  constructor(
    protected readonly service: ProductListStockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
