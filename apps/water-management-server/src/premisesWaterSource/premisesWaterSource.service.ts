import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PremisesWaterSourceServiceBase } from "./base/premisesWaterSource.service.base";

@Injectable()
export class PremisesWaterSourceService extends PremisesWaterSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
