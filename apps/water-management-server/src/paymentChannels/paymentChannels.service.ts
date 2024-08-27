import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentChannelsServiceBase } from "./base/paymentChannels.service.base";

@Injectable()
export class PaymentChannelsService extends PaymentChannelsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
