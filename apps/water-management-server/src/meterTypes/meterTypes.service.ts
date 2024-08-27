import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeterTypesServiceBase } from "./base/meterTypes.service.base";

@Injectable()
export class MeterTypesService extends MeterTypesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
