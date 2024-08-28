/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  DocumentTypes as PrismaDocumentTypes,
  Documents as PrismaDocuments,
} from "@prisma/client";

export class DocumentTypesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DocumentTypesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.documentTypes.count(args);
  }

  async documentTypesItems(
    args: Prisma.DocumentTypesFindManyArgs
  ): Promise<PrismaDocumentTypes[]> {
    return this.prisma.documentTypes.findMany(args);
  }
  async documentTypes(
    args: Prisma.DocumentTypesFindUniqueArgs
  ): Promise<PrismaDocumentTypes | null> {
    return this.prisma.documentTypes.findUnique(args);
  }
  async createDocumentTypes(
    args: Prisma.DocumentTypesCreateArgs
  ): Promise<PrismaDocumentTypes> {
    return this.prisma.documentTypes.create(args);
  }
  async updateDocumentTypes(
    args: Prisma.DocumentTypesUpdateArgs
  ): Promise<PrismaDocumentTypes> {
    return this.prisma.documentTypes.update(args);
  }
  async deleteDocumentTypes(
    args: Prisma.DocumentTypesDeleteArgs
  ): Promise<PrismaDocumentTypes> {
    return this.prisma.documentTypes.delete(args);
  }

  async findDocumentsItems(
    parentId: string,
    args: Prisma.DocumentsFindManyArgs
  ): Promise<PrismaDocuments[]> {
    return this.prisma.documentTypes
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .documentsItems(args);
  }
}
