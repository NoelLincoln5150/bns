import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeterDataServiceBase } from "./base/meterData.service.base";

@Injectable()
export class MeterDataService extends MeterDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
