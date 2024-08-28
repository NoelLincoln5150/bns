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
import { MeterDataService } from "../meterData.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MeterDataCreateInput } from "./MeterDataCreateInput";
import { MeterData } from "./MeterData";
import { MeterDataFindManyArgs } from "./MeterDataFindManyArgs";
import { MeterDataWhereUniqueInput } from "./MeterDataWhereUniqueInput";
import { MeterDataUpdateInput } from "./MeterDataUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MeterDataControllerBase {
  constructor(
    protected readonly service: MeterDataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MeterData })
  @nestAccessControl.UseRoles({
    resource: "MeterData",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMeterData(
    @common.Body() data: MeterDataCreateInput
  ): Promise<MeterData> {
    return await this.service.createMeterData({
      data: {
        ...data,

        prepaidMeter: data.prepaidMeter
          ? {
              connect: data.prepaidMeter,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        prepaidMeter: {
          select: {
            id: true,
          },
        },

        timestamp: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MeterData] })
  @ApiNestedQuery(MeterDataFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MeterData",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async meterDataItems(@common.Req() request: Request): Promise<MeterData[]> {
    const args = plainToClass(MeterDataFindManyArgs, request.query);
    return this.service.meterDataItems({
      ...args,
      select: {
        createdAt: true,
        id: true,

        prepaidMeter: {
          select: {
            id: true,
          },
        },

        timestamp: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MeterData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MeterData",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async meterData(
    @common.Param() params: MeterDataWhereUniqueInput
  ): Promise<MeterData | null> {
    const result = await this.service.meterData({
      where: params,
      select: {
        createdAt: true,
        id: true,

        prepaidMeter: {
          select: {
            id: true,
          },
        },

        timestamp: true,
        updatedAt: true,
        value: true,
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
  @swagger.ApiOkResponse({ type: MeterData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MeterData",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMeterData(
    @common.Param() params: MeterDataWhereUniqueInput,
    @common.Body() data: MeterDataUpdateInput
  ): Promise<MeterData | null> {
    try {
      return await this.service.updateMeterData({
        where: params,
        data: {
          ...data,

          prepaidMeter: data.prepaidMeter
            ? {
                connect: data.prepaidMeter,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          prepaidMeter: {
            select: {
              id: true,
            },
          },

          timestamp: true,
          updatedAt: true,
          value: true,
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
  @swagger.ApiOkResponse({ type: MeterData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MeterData",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMeterData(
    @common.Param() params: MeterDataWhereUniqueInput
  ): Promise<MeterData | null> {
    try {
      return await this.service.deleteMeterData({
        where: params,
        select: {
          createdAt: true,
          id: true,

          prepaidMeter: {
            select: {
              id: true,
            },
          },

          timestamp: true,
          updatedAt: true,
          value: true,
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
