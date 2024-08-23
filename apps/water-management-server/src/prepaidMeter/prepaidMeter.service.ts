import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrepaidMeterServiceBase } from "./base/prepaidMeter.service.base";

@Injectable()
export class PrepaidMeterService extends PrepaidMeterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
