import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { B2bTransactionsServiceBase } from "./base/b2bTransactions.service.base";

@Injectable()
export class B2bTransactionsService extends B2bTransactionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
