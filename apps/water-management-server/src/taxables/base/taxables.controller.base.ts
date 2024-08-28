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
import { TaxablesService } from "../taxables.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TaxablesCreateInput } from "./TaxablesCreateInput";
import { Taxables } from "./Taxables";
import { TaxablesFindManyArgs } from "./TaxablesFindManyArgs";
import { TaxablesWhereUniqueInput } from "./TaxablesWhereUniqueInput";
import { TaxablesUpdateInput } from "./TaxablesUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TaxablesControllerBase {
  constructor(
    protected readonly service: TaxablesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Taxables })
  @nestAccessControl.UseRoles({
    resource: "Taxables",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TaxablesCreateInput,
  })
  async createTaxables(
    @common.Body() data: TaxablesCreateInput
  ): Promise<Taxables> {
    return await this.service.createTaxables({
      data: data,
      select: {
        apply: true,
        createdAt: true,
        id: true,
        included: true,
        rate: true,
        taxId: true,
        taxableId: true,
        taxableType: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Taxables] })
  @ApiNestedQuery(TaxablesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Taxables",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async taxablesItems(@common.Req() request: Request): Promise<Taxables[]> {
    const args = plainToClass(TaxablesFindManyArgs, request.query);
    return this.service.taxablesItems({
      ...args,
      select: {
        apply: true,
        createdAt: true,
        id: true,
        included: true,
        rate: true,
        taxId: true,
        taxableId: true,
        taxableType: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Taxables })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Taxables",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async taxables(
    @common.Param() params: TaxablesWhereUniqueInput
  ): Promise<Taxables | null> {
    const result = await this.service.taxables({
      where: params,
      select: {
        apply: true,
        createdAt: true,
        id: true,
        included: true,
        rate: true,
        taxId: true,
        taxableId: true,
        taxableType: true,
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
  @swagger.ApiOkResponse({ type: Taxables })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Taxables",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TaxablesUpdateInput,
  })
  async updateTaxables(
    @common.Param() params: TaxablesWhereUniqueInput,
    @common.Body() data: TaxablesUpdateInput
  ): Promise<Taxables | null> {
    try {
      return await this.service.updateTaxables({
        where: params,
        data: data,
        select: {
          apply: true,
          createdAt: true,
          id: true,
          included: true,
          rate: true,
          taxId: true,
          taxableId: true,
          taxableType: true,
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
  @swagger.ApiOkResponse({ type: Taxables })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Taxables",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTaxables(
    @common.Param() params: TaxablesWhereUniqueInput
  ): Promise<Taxables | null> {
    try {
      return await this.service.deleteTaxables({
        where: params,
        select: {
          apply: true,
          createdAt: true,
          id: true,
          included: true,
          rate: true,
          taxId: true,
          taxableId: true,
          taxableType: true,
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
}
