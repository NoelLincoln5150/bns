import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaxesServiceBase } from "./base/taxes.service.base";

@Injectable()
export class TaxesService extends TaxesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
