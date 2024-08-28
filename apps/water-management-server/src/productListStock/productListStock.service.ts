import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductListStockServiceBase } from "./base/productListStock.service.base";

@Injectable()
export class ProductListStockService extends ProductListStockServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
