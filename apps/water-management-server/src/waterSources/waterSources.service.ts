import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WaterSourcesServiceBase } from "./base/waterSources.service.base";

@Injectable()
export class WaterSourcesService extends WaterSourcesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
