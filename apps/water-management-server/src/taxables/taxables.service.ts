import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaxablesServiceBase } from "./base/taxables.service.base";

@Injectable()
export class TaxablesService extends TaxablesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
