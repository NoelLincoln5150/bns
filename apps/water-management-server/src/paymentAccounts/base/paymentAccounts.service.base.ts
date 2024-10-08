/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  PaymentAccounts as PrismaPaymentAccounts,
  B2bTransactions as PrismaB2bTransactions,
} from "@prisma/client";

export class PaymentAccountsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PaymentAccountsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.paymentAccounts.count(args);
  }

  async paymentAccountsItems(
    args: Prisma.PaymentAccountsFindManyArgs
  ): Promise<PrismaPaymentAccounts[]> {
    return this.prisma.paymentAccounts.findMany(args);
  }
  async paymentAccounts(
    args: Prisma.PaymentAccountsFindUniqueArgs
  ): Promise<PrismaPaymentAccounts | null> {
    return this.prisma.paymentAccounts.findUnique(args);
  }
  async createPaymentAccounts(
    args: Prisma.PaymentAccountsCreateArgs
  ): Promise<PrismaPaymentAccounts> {
    return this.prisma.paymentAccounts.create(args);
  }
  async updatePaymentAccounts(
    args: Prisma.PaymentAccountsUpdateArgs
  ): Promise<PrismaPaymentAccounts> {
    return this.prisma.paymentAccounts.update(args);
  }
  async deletePaymentAccounts(
    args: Prisma.PaymentAccountsDeleteArgs
  ): Promise<PrismaPaymentAccounts> {
    return this.prisma.paymentAccounts.delete(args);
  }

  async findB2bTransactionsItems(
    parentId: string,
    args: Prisma.B2bTransactionsFindManyArgs
  ): Promise<PrismaB2bTransactions[]> {
    return this.prisma.paymentAccounts
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .b2bTransactionsItems(args);
  }
}
