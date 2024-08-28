import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { C2bTransactionsServiceBase } from "./base/c2bTransactions.service.base";

@Injectable()
export class C2bTransactionsService extends C2bTransactionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
