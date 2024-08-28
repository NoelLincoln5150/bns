import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductListsServiceBase } from "./base/productLists.service.base";

@Injectable()
export class ProductListsService extends ProductListsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
