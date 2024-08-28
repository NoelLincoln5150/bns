import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategoryProductServiceBase } from "./base/categoryProduct.service.base";

@Injectable()
export class CategoryProductService extends CategoryProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
