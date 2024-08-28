import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WaterMeterServiceBase } from "./base/waterMeter.service.base";

@Injectable()
export class WaterMeterService extends WaterMeterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
