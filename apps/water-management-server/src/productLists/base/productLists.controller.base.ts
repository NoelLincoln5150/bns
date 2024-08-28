/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ProductListsService } from "../productLists.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductListsCreateInput } from "./ProductListsCreateInput";
import { ProductLists } from "./ProductLists";
import { ProductListsFindManyArgs } from "./ProductListsFindManyArgs";
import { ProductListsWhereUniqueInput } from "./ProductListsWhereUniqueInput";
import { ProductListsUpdateInput } from "./ProductListsUpdateInput";
import { ProductsFindManyArgs } from "../../products/base/ProductsFindManyArgs";
import { Products } from "../../products/base/Products";
import { ProductsWhereUniqueInput } from "../../products/base/ProductsWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductListsControllerBase {
  constructor(
    protected readonly service: ProductListsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductLists })
  @nestAccessControl.UseRoles({
    resource: "ProductLists",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ProductListsCreateInput,
  })
  async createProductLists(
    @common.Body() data: ProductListsCreateInput
  ): Promise<ProductLists> {
    return await this.service.createProductLists({
      data: data,
      select: {
        barcode: true,
        createdAt: true,
        deletedAt: true,
        id: true,
        inStock: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductLists] })
  @ApiNestedQuery(ProductListsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProductLists",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async productListsItems(
    @common.Req() request: Request
  ): Promise<ProductLists[]> {
    const args = plainToClass(ProductListsFindManyArgs, request.query);
    return this.service.productListsItems({
      ...args,
      select: {
        barcode: true,
        createdAt: true,
        deletedAt: true,
        id: true,
        inStock: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductLists })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductLists",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async productLists(
    @common.Param() params: ProductListsWhereUniqueInput
  ): Promise<ProductLists | null> {
    const result = await this.service.productLists({
      where: params,
      select: {
        barcode: true,
        createdAt: true,
        deletedAt: true,
        id: true,
        inStock: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProductLists })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductLists",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ProductListsUpdateInput,
  })
  async updateProductLists(
    @common.Param() params: ProductListsWhereUniqueInput,
    @common.Body() data: ProductListsUpdateInput
  ): Promise<ProductLists | null> {
    try {
      return await this.service.updateProductLists({
        where: params,
        data: data,
        select: {
          barcode: true,
          createdAt: true,
          deletedAt: true,
          id: true,
          inStock: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProductLists })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductLists",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProductLists(
    @common.Param() params: ProductListsWhereUniqueInput
  ): Promise<ProductLists | null> {
    try {
      return await this.service.deleteProductLists({
        where: params,
        select: {
          barcode: true,
          createdAt: true,
          deletedAt: true,
          id: true,
          inStock: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/productid")
  @ApiNestedQuery(ProductsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Products",
    action: "read",
    possession: "any",
  })
  async findProductid(
    @common.Req() request: Request,
    @common.Param() params: ProductListsWhereUniqueInput
  ): Promise<Products[]> {
    const query = plainToClass(ProductsFindManyArgs, request.query);
    const results = await this.service.findProductid(params.id, {
      ...query,
      select: {
        barcode: true,
        createdAt: true,
        deletedAt: true,
        description: true,
        id: true,
        isSerialized: true,
        lowStockWarning: true,
        minimumOrderQuantity: true,
        name: true,
        price: true,
        quantity: true,
        stockTakePeriod: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/productid")
  @nestAccessControl.UseRoles({
    resource: "ProductLists",
    action: "update",
    possession: "any",
  })
  async connectProductid(
    @common.Param() params: ProductListsWhereUniqueInput,
    @common.Body() body: ProductsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productid: {
        connect: body,
      },
    };
    await this.service.updateProductLists({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/productid")
  @nestAccessControl.UseRoles({
    resource: "ProductLists",
    action: "update",
    possession: "any",
  })
  async updateProductid(
    @common.Param() params: ProductListsWhereUniqueInput,
    @common.Body() body: ProductsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productid: {
        set: body,
      },
    };
    await this.service.updateProductLists({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/productid")
  @nestAccessControl.UseRoles({
    resource: "ProductLists",
    action: "update",
    possession: "any",
  })
  async disconnectProductid(
    @common.Param() params: ProductListsWhereUniqueInput,
    @common.Body() body: ProductsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productid: {
        disconnect: body,
      },
    };
    await this.service.updateProductLists({
      where: params,
      data,
      select: { id: true },
    });
  }
}
