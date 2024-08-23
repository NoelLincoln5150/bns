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
import { PrepaidMeterService } from "../prepaidMeter.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PrepaidMeterCreateInput } from "./PrepaidMeterCreateInput";
import { PrepaidMeter } from "./PrepaidMeter";
import { PrepaidMeterFindManyArgs } from "./PrepaidMeterFindManyArgs";
import { PrepaidMeterWhereUniqueInput } from "./PrepaidMeterWhereUniqueInput";
import { PrepaidMeterUpdateInput } from "./PrepaidMeterUpdateInput";
import { AlertFindManyArgs } from "../../alert/base/AlertFindManyArgs";
import { Alert } from "../../alert/base/Alert";
import { AlertWhereUniqueInput } from "../../alert/base/AlertWhereUniqueInput";
import { CommandFindManyArgs } from "../../command/base/CommandFindManyArgs";
import { Command } from "../../command/base/Command";
import { CommandWhereUniqueInput } from "../../command/base/CommandWhereUniqueInput";
import { MeterDataFindManyArgs } from "../../meterData/base/MeterDataFindManyArgs";
import { MeterData } from "../../meterData/base/MeterData";
import { MeterDataWhereUniqueInput } from "../../meterData/base/MeterDataWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PrepaidMeterControllerBase {
  constructor(
    protected readonly service: PrepaidMeterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PrepaidMeter })
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPrepaidMeter(
    @common.Body() data: PrepaidMeterCreateInput
  ): Promise<PrepaidMeter> {
    return await this.service.createPrepaidMeter({
      data: data,
      select: {
        createdAt: true,
        id: true,
        meterNumber: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PrepaidMeter] })
  @ApiNestedQuery(PrepaidMeterFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async prepaidMeters(@common.Req() request: Request): Promise<PrepaidMeter[]> {
    const args = plainToClass(PrepaidMeterFindManyArgs, request.query);
    return this.service.prepaidMeters({
      ...args,
      select: {
        createdAt: true,
        id: true,
        meterNumber: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PrepaidMeter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async prepaidMeter(
    @common.Param() params: PrepaidMeterWhereUniqueInput
  ): Promise<PrepaidMeter | null> {
    const result = await this.service.prepaidMeter({
      where: params,
      select: {
        createdAt: true,
        id: true,
        meterNumber: true,
        status: true,
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
  @swagger.ApiOkResponse({ type: PrepaidMeter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePrepaidMeter(
    @common.Param() params: PrepaidMeterWhereUniqueInput,
    @common.Body() data: PrepaidMeterUpdateInput
  ): Promise<PrepaidMeter | null> {
    try {
      return await this.service.updatePrepaidMeter({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          meterNumber: true,
          status: true,
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
  @swagger.ApiOkResponse({ type: PrepaidMeter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePrepaidMeter(
    @common.Param() params: PrepaidMeterWhereUniqueInput
  ): Promise<PrepaidMeter | null> {
    try {
      return await this.service.deletePrepaidMeter({
        where: params,
        select: {
          createdAt: true,
          id: true,
          meterNumber: true,
          status: true,
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
  @common.Get("/:id/alerts")
  @ApiNestedQuery(AlertFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Alert",
    action: "read",
    possession: "any",
  })
  async findAlerts(
    @common.Req() request: Request,
    @common.Param() params: PrepaidMeterWhereUniqueInput
  ): Promise<Alert[]> {
    const query = plainToClass(AlertFindManyArgs, request.query);
    const results = await this.service.findAlerts(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        level: true,
        message: true,

        prepaidMeter: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/alerts")
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "update",
    possession: "any",
  })
  async connectAlerts(
    @common.Param() params: PrepaidMeterWhereUniqueInput,
    @common.Body() body: AlertWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      alerts: {
        connect: body,
      },
    };
    await this.service.updatePrepaidMeter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/alerts")
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "update",
    possession: "any",
  })
  async updateAlerts(
    @common.Param() params: PrepaidMeterWhereUniqueInput,
    @common.Body() body: AlertWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      alerts: {
        set: body,
      },
    };
    await this.service.updatePrepaidMeter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/alerts")
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "update",
    possession: "any",
  })
  async disconnectAlerts(
    @common.Param() params: PrepaidMeterWhereUniqueInput,
    @common.Body() body: AlertWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      alerts: {
        disconnect: body,
      },
    };
    await this.service.updatePrepaidMeter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/commands")
  @ApiNestedQuery(CommandFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "read",
    possession: "any",
  })
  async findCommands(
    @common.Req() request: Request,
    @common.Param() params: PrepaidMeterWhereUniqueInput
  ): Promise<Command[]> {
    const query = plainToClass(CommandFindManyArgs, request.query);
    const results = await this.service.findCommands(params.id, {
      ...query,
      select: {
        commandType: true,
        createdAt: true,
        id: true,
        parameter: true,

        prepaidMeter: {
          select: {
            id: true,
          },
        },

        sentAt: true,
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

  @common.Post("/:id/commands")
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "update",
    possession: "any",
  })
  async connectCommands(
    @common.Param() params: PrepaidMeterWhereUniqueInput,
    @common.Body() body: CommandWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commands: {
        connect: body,
      },
    };
    await this.service.updatePrepaidMeter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/commands")
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "update",
    possession: "any",
  })
  async updateCommands(
    @common.Param() params: PrepaidMeterWhereUniqueInput,
    @common.Body() body: CommandWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commands: {
        set: body,
      },
    };
    await this.service.updatePrepaidMeter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/commands")
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "update",
    possession: "any",
  })
  async disconnectCommands(
    @common.Param() params: PrepaidMeterWhereUniqueInput,
    @common.Body() body: CommandWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commands: {
        disconnect: body,
      },
    };
    await this.service.updatePrepaidMeter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/meterDataItems")
  @ApiNestedQuery(MeterDataFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MeterData",
    action: "read",
    possession: "any",
  })
  async findMeterDataItems(
    @common.Req() request: Request,
    @common.Param() params: PrepaidMeterWhereUniqueInput
  ): Promise<MeterData[]> {
    const query = plainToClass(MeterDataFindManyArgs, request.query);
    const results = await this.service.findMeterDataItems(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/meterDataItems")
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "update",
    possession: "any",
  })
  async connectMeterDataItems(
    @common.Param() params: PrepaidMeterWhereUniqueInput,
    @common.Body() body: MeterDataWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meterDataItems: {
        connect: body,
      },
    };
    await this.service.updatePrepaidMeter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/meterDataItems")
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "update",
    possession: "any",
  })
  async updateMeterDataItems(
    @common.Param() params: PrepaidMeterWhereUniqueInput,
    @common.Body() body: MeterDataWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meterDataItems: {
        set: body,
      },
    };
    await this.service.updatePrepaidMeter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/meterDataItems")
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "update",
    possession: "any",
  })
  async disconnectMeterDataItems(
    @common.Param() params: PrepaidMeterWhereUniqueInput,
    @common.Body() body: MeterDataWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meterDataItems: {
        disconnect: body,
      },
    };
    await this.service.updatePrepaidMeter({
      where: params,
      data,
      select: { id: true },
    });
  }
}
