/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductListStock } from "./ProductListStock";
import { ProductListStockCountArgs } from "./ProductListStockCountArgs";
import { ProductListStockFindManyArgs } from "./ProductListStockFindManyArgs";
import { ProductListStockFindUniqueArgs } from "./ProductListStockFindUniqueArgs";
import { DeleteProductListStockArgs } from "./DeleteProductListStockArgs";
import { ProductListStockService } from "../productListStock.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductListStock)
export class ProductListStockResolverBase {
  constructor(
    protected readonly service: ProductListStockService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProductListStock",
    action: "read",
    possession: "any",
  })
  async _productListStocksMeta(
    @graphql.Args() args: ProductListStockCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ProductListStock])
  @nestAccessControl.UseRoles({
    resource: "ProductListStock",
    action: "read",
    possession: "any",
  })
  async productListStocks(
    @graphql.Args() args: ProductListStockFindManyArgs
  ): Promise<ProductListStock[]> {
    return this.service.productListStocks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProductListStock, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProductListStock",
    action: "read",
    possession: "own",
  })
  async productListStock(
    @graphql.Args() args: ProductListStockFindUniqueArgs
  ): Promise<ProductListStock | null> {
    const result = await this.service.productListStock(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProductListStock)
  @nestAccessControl.UseRoles({
    resource: "ProductListStock",
    action: "delete",
    possession: "any",
  })
  async deleteProductListStock(
    @graphql.Args() args: DeleteProductListStockArgs
  ): Promise<ProductListStock | null> {
    try {
      return await this.service.deleteProductListStock(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
