import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionCostsServiceBase } from "./base/transactionCosts.service.base";

@Injectable()
export class TransactionCostsService extends TransactionCostsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
