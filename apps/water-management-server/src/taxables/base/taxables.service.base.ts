/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Taxables as PrismaTaxables } from "@prisma/client";

export class TaxablesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TaxablesCountArgs, "select">): Promise<number> {
    return this.prisma.taxables.count(args);
  }

  async taxablesItems(
    args: Prisma.TaxablesFindManyArgs
  ): Promise<PrismaTaxables[]> {
    return this.prisma.taxables.findMany(args);
  }
  async taxables(
    args: Prisma.TaxablesFindUniqueArgs
  ): Promise<PrismaTaxables | null> {
    return this.prisma.taxables.findUnique(args);
  }
  async createTaxables(
    args: Prisma.TaxablesCreateArgs
  ): Promise<PrismaTaxables> {
    return this.prisma.taxables.create(args);
  }
  async updateTaxables(
    args: Prisma.TaxablesUpdateArgs
  ): Promise<PrismaTaxables> {
    return this.prisma.taxables.update(args);
  }
  async deleteTaxables(
    args: Prisma.TaxablesDeleteArgs
  ): Promise<PrismaTaxables> {
    return this.prisma.taxables.delete(args);
  }
}
