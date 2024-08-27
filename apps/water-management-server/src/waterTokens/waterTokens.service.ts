import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WaterTokensServiceBase } from "./base/waterTokens.service.base";

@Injectable()
export class WaterTokensService extends WaterTokensServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
