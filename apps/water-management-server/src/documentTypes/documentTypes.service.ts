import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentTypesServiceBase } from "./base/documentTypes.service.base";

@Injectable()
export class DocumentTypesService extends DocumentTypesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
