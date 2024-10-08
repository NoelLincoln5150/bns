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
import { DocumentNumbersService } from "../documentNumbers.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DocumentNumbersCreateInput } from "./DocumentNumbersCreateInput";
import { DocumentNumbers } from "./DocumentNumbers";
import { DocumentNumbersFindManyArgs } from "./DocumentNumbersFindManyArgs";
import { DocumentNumbersWhereUniqueInput } from "./DocumentNumbersWhereUniqueInput";
import { DocumentNumbersUpdateInput } from "./DocumentNumbersUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DocumentNumbersControllerBase {
  constructor(
    protected readonly service: DocumentNumbersService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DocumentNumbers })
  @nestAccessControl.UseRoles({
    resource: "DocumentNumbers",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: DocumentNumbersCreateInput,
  })
  async createDocumentNumbers(
    @common.Body() data: DocumentNumbersCreateInput
  ): Promise<DocumentNumbers> {
    return await this.service.createDocumentNumbers({
      data: data,
      select: {
        code: true,
        count: true,
        createdAt: true,
        deletedAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
        year: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DocumentNumbers] })
  @ApiNestedQuery(DocumentNumbersFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DocumentNumbers",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async documentNumbersItems(
    @common.Req() request: Request
  ): Promise<DocumentNumbers[]> {
    const args = plainToClass(DocumentNumbersFindManyArgs, request.query);
    return this.service.documentNumbersItems({
      ...args,
      select: {
        code: true,
        count: true,
        createdAt: true,
        deletedAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
        year: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DocumentNumbers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DocumentNumbers",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async documentNumbers(
    @common.Param() params: DocumentNumbersWhereUniqueInput
  ): Promise<DocumentNumbers | null> {
    const result = await this.service.documentNumbers({
      where: params,
      select: {
        code: true,
        count: true,
        createdAt: true,
        deletedAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
        year: true,
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
  @swagger.ApiOkResponse({ type: DocumentNumbers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DocumentNumbers",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: DocumentNumbersUpdateInput,
  })
  async updateDocumentNumbers(
    @common.Param() params: DocumentNumbersWhereUniqueInput,
    @common.Body() data: DocumentNumbersUpdateInput
  ): Promise<DocumentNumbers | null> {
    try {
      return await this.service.updateDocumentNumbers({
        where: params,
        data: data,
        select: {
          code: true,
          count: true,
          createdAt: true,
          deletedAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
          year: true,
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
  @swagger.ApiOkResponse({ type: DocumentNumbers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DocumentNumbers",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDocumentNumbers(
    @common.Param() params: DocumentNumbersWhereUniqueInput
  ): Promise<DocumentNumbers | null> {
    try {
      return await this.service.deleteDocumentNumbers({
        where: params,
        select: {
          code: true,
          count: true,
          createdAt: true,
          deletedAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
          year: true,
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
}
