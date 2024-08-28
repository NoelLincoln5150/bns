import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeterServiceBase } from "./base/meter.service.base";

@Injectable()
export class MeterService extends MeterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
