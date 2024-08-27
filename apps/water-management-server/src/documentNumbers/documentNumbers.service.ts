import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentNumbersServiceBase } from "./base/documentNumbers.service.base";

@Injectable()
export class DocumentNumbersService extends DocumentNumbersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
