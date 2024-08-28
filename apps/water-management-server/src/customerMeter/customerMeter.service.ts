import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerMeterServiceBase } from "./base/customerMeter.service.base";

@Injectable()
export class CustomerMeterService extends CustomerMeterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
