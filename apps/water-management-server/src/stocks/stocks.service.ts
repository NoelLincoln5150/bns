import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StocksServiceBase } from "./base/stocks.service.base";

@Injectable()
export class StocksService extends StocksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
