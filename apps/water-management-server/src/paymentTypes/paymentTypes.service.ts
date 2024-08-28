import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentTypesServiceBase } from "./base/paymentTypes.service.base";

@Injectable()
export class PaymentTypesService extends PaymentTypesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
