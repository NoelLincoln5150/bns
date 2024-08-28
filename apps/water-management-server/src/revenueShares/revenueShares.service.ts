import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RevenueSharesServiceBase } from "./base/revenueShares.service.base";

@Injectable()
export class RevenueSharesService extends RevenueSharesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
