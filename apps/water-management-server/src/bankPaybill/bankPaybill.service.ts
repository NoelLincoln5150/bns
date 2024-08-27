import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankPaybillServiceBase } from "./base/bankPaybill.service.base";

@Injectable()
export class BankPaybillService extends BankPaybillServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
