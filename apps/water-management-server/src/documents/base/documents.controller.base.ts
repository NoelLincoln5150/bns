/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DocumentsService } from "../documents.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DocumentsCreateInput } from "./DocumentsCreateInput";
import { Documents } from "./Documents";
import { DocumentsFindManyArgs } from "./DocumentsFindManyArgs";
import { DocumentsWhereUniqueInput } from "./DocumentsWhereUniqueInput";
import { DocumentsUpdateInput } from "./DocumentsUpdateInput";
import { DocumentPaymentsFindManyArgs } from "../../documentPayments/base/DocumentPaymentsFindManyArgs";
import { DocumentPayments } from "../../documentPayments/base/DocumentPayments";
import { DocumentPaymentsWhereUniqueInput } from "../../documentPayments/base/DocumentPaymentsWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DocumentsControllerBase {
  constructor(
    protected readonly service: DocumentsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Documents })
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: DocumentsCreateInput,
  })
  async createDocuments(
    @common.Body() data: DocumentsCreateInput
  ): Promise<Documents> {
    return await this.service.createDocuments({
      data: {
        ...data,

        documentType: data.documentType
          ? {
              connect: data.documentType,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        deletedAt: true,

        documentType: {
          select: {
            id: true,
          },
        },

        documentableId: true,
        documentableType: true,
        id: true,
        numberField: true,
        paid: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Documents] })
  @ApiNestedQuery(DocumentsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async documentsItems(@common.Req() request: Request): Promise<Documents[]> {
    const args = plainToClass(DocumentsFindManyArgs, request.query);
    return this.service.documentsItems({
      ...args,
      select: {
        createdAt: true,
        deletedAt: true,

        documentType: {
          select: {
            id: true,
          },
        },

        documentableId: true,
        documentableType: true,
        id: true,
        numberField: true,
        paid: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Documents })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async documents(
    @common.Param() params: DocumentsWhereUniqueInput
  ): Promise<Documents | null> {
    const result = await this.service.documents({
      where: params,
      select: {
        createdAt: true,
        deletedAt: true,

        documentType: {
          select: {
            id: true,
          },
        },

        documentableId: true,
        documentableType: true,
        id: true,
        numberField: true,
        paid: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Documents })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: DocumentsUpdateInput,
  })
  async updateDocuments(
    @common.Param() params: DocumentsWhereUniqueInput,
    @common.Body() data: DocumentsUpdateInput
  ): Promise<Documents | null> {
    try {
      return await this.service.updateDocuments({
        where: params,
        data: {
          ...data,

          documentType: data.documentType
            ? {
                connect: data.documentType,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          deletedAt: true,

          documentType: {
            select: {
              id: true,
            },
          },

          documentableId: true,
          documentableType: true,
          id: true,
          numberField: true,
          paid: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Documents })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDocuments(
    @common.Param() params: DocumentsWhereUniqueInput
  ): Promise<Documents | null> {
    try {
      return await this.service.deleteDocuments({
        where: params,
        select: {
          createdAt: true,
          deletedAt: true,

          documentType: {
            select: {
              id: true,
            },
          },

          documentableId: true,
          documentableType: true,
          id: true,
          numberField: true,
          paid: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/documentPaymentsItems")
  @ApiNestedQuery(DocumentPaymentsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DocumentPayments",
    action: "read",
    possession: "any",
  })
  async findDocumentPaymentsItems(
    @common.Req() request: Request,
    @common.Param() params: DocumentsWhereUniqueInput
  ): Promise<DocumentPayments[]> {
    const query = plainToClass(DocumentPaymentsFindManyArgs, request.query);
    const results = await this.service.findDocumentPaymentsItems(params.id, {
      ...query,
      select: {
        createdAt: true,

        document: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/documentPaymentsItems")
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "update",
    possession: "any",
  })
  async connectDocumentPaymentsItems(
    @common.Param() params: DocumentsWhereUniqueInput,
    @common.Body() body: DocumentPaymentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documentPaymentsItems: {
        connect: body,
      },
    };
    await this.service.updateDocuments({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/documentPaymentsItems")
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "update",
    possession: "any",
  })
  async updateDocumentPaymentsItems(
    @common.Param() params: DocumentsWhereUniqueInput,
    @common.Body() body: DocumentPaymentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documentPaymentsItems: {
        set: body,
      },
    };
    await this.service.updateDocuments({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/documentPaymentsItems")
  @nestAccessControl.UseRoles({
    resource: "Documents",
    action: "update",
    possession: "any",
  })
  async disconnectDocumentPaymentsItems(
    @common.Param() params: DocumentsWhereUniqueInput,
    @common.Body() body: DocumentPaymentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documentPaymentsItems: {
        disconnect: body,
      },
    };
    await this.service.updateDocuments({
      where: params,
      data,
      select: { id: true },
    });
  }
}
