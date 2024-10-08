import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CategoryProductResolverBase } from "./base/categoryProduct.resolver.base";
import { CategoryProduct } from "./base/CategoryProduct";
import { CategoryProductService } from "./categoryProduct.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CategoryProduct)
export class CategoryProductResolver extends CategoryProductResolverBase {
  constructor(
    protected readonly service: CategoryProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
