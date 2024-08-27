import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentsServiceBase } from "./base/documents.service.base";

@Injectable()
export class DocumentsService extends DocumentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
