import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentAccountsServiceBase } from "./base/paymentAccounts.service.base";

@Injectable()
export class PaymentAccountsService extends PaymentAccountsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
