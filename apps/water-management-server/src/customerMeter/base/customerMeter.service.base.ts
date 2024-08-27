/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CustomerMeter as PrismaCustomerMeter } from "@prisma/client";

export class CustomerMeterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CustomerMeterCountArgs, "select">
  ): Promise<number> {
    return this.prisma.customerMeter.count(args);
  }

  async customerMeters(
    args: Prisma.CustomerMeterFindManyArgs
  ): Promise<PrismaCustomerMeter[]> {
    return this.prisma.customerMeter.findMany(args);
  }
  async customerMeter(
    args: Prisma.CustomerMeterFindUniqueArgs
  ): Promise<PrismaCustomerMeter | null> {
    return this.prisma.customerMeter.findUnique(args);
  }
  async createCustomerMeter(
    args: Prisma.CustomerMeterCreateArgs
  ): Promise<PrismaCustomerMeter> {
    return this.prisma.customerMeter.create(args);
  }
  async updateCustomerMeter(
    args: Prisma.CustomerMeterUpdateArgs
  ): Promise<PrismaCustomerMeter> {
    return this.prisma.customerMeter.update(args);
  }
  async deleteCustomerMeter(
    args: Prisma.CustomerMeterDeleteArgs
  ): Promise<PrismaCustomerMeter> {
    return this.prisma.customerMeter.delete(args);
  }
}
