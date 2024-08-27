/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ProductLists as PrismaProductLists } from "@prisma/client";

export class ProductListsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductListsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productLists.count(args);
  }

  async productListsItems(
    args: Prisma.ProductListsFindManyArgs
  ): Promise<PrismaProductLists[]> {
    return this.prisma.productLists.findMany(args);
  }
  async productLists(
    args: Prisma.ProductListsFindUniqueArgs
  ): Promise<PrismaProductLists | null> {
    return this.prisma.productLists.findUnique(args);
  }
  async createProductLists(
    args: Prisma.ProductListsCreateArgs
  ): Promise<PrismaProductLists> {
    return this.prisma.productLists.create(args);
  }
  async updateProductLists(
    args: Prisma.ProductListsUpdateArgs
  ): Promise<PrismaProductLists> {
    return this.prisma.productLists.update(args);
  }
  async deleteProductLists(
    args: Prisma.ProductListsDeleteArgs
  ): Promise<PrismaProductLists> {
    return this.prisma.productLists.delete(args);
  }
}
