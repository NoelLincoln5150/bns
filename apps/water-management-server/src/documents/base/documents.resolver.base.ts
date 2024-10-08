/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Documents } from "./Documents";
import { DocumentsCountArgs } from "./DocumentsCountArgs";
import { DocumentsFindManyArgs } from "./DocumentsFindManyArgs";
import { DocumentsFindUniqueArgs } from "./DocumentsFindUniqueArgs";
import { CreateDocumentsArgs } from "./CreateDocumentsArgs";
import { UpdateDocumentsArgs } from "./UpdateDocumentsArgs";
import { DeleteDocumentsArgs } from "./DeleteDocumentsArgs";
import { DocumentPaymentsFindManyArgs } from "../../documentPayments/base/DocumentPaymentsFindManyArgs";
import { DocumentPayments } from "../../documentPayments/base/DocumentPayments";
import { DocumentTypes } from "../../documentTypes/base/DocumentTypes";
import { DocumentsService } from "../documents.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Documents)
export class DocumentsResolverBase {
  constructor(
    protected readonly service: DocumentsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "read",
    possession: "any",
  })
  async _documentsItemsMeta(
    @graphql.Args() args: DocumentsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Documents])
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "read",
    possession: "any",
  })
  async documentsItems(
    @graphql.Args() args: DocumentsFindManyArgs
  ): Promise<Documents[]> {
    return this.service.documentsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Documents, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "read",
    possession: "own",
  })
  async documents(
    @graphql.Args() args: DocumentsFindUniqueArgs
  ): Promise<Documents | null> {
    const result = await this.service.documents(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Documents)
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "create",
    possession: "any",
  })
  async createDocuments(
    @graphql.Args() args: CreateDocumentsArgs
  ): Promise<Documents> {
    return await this.service.createDocuments({
      ...args,
      data: {
        ...args.data,

        documentType: args.data.documentType
          ? {
              connect: args.data.documentType,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Documents)
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "update",
    possession: "any",
  })
  async updateDocuments(
    @graphql.Args() args: UpdateDocumentsArgs
  ): Promise<Documents | null> {
    try {
      return await this.service.updateDocuments({
        ...args,
        data: {
          ...args.data,

          documentType: args.data.documentType
            ? {
                connect: args.data.documentType,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Documents)
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "delete",
    possession: "any",
  })
  async deleteDocuments(
    @graphql.Args() args: DeleteDocumentsArgs
  ): Promise<Documents | null> {
    try {
      return await this.service.deleteDocuments(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DocumentPayments], {
    name: "documentPaymentsItems",
  })
  @nestAccessControl.UseRoles({
    resource: "DocumentPayments",
    action: "read",
    possession: "any",
  })
  async findDocumentPaymentsItems(
    @graphql.Parent() parent: Documents,
    @graphql.Args() args: DocumentPaymentsFindManyArgs
  ): Promise<DocumentPayments[]> {
    const results = await this.service.findDocumentPaymentsItems(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => DocumentTypes, {
    nullable: true,
    name: "documentType",
  })
  @nestAccessControl.UseRoles({
    resource: "DocumentTypes",
    action: "read",
    possession: "any",
  })
  async getDocumentType(
    @graphql.Parent() parent: Documents
  ): Promise<DocumentTypes | null> {
    const result = await this.service.getDocumentType(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
