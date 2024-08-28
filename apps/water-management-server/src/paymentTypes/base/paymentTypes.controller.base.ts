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
import { PaymentTypesService } from "../paymentTypes.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PaymentTypesCreateInput } from "./PaymentTypesCreateInput";
import { PaymentTypes } from "./PaymentTypes";
import { PaymentTypesFindManyArgs } from "./PaymentTypesFindManyArgs";
import { PaymentTypesWhereUniqueInput } from "./PaymentTypesWhereUniqueInput";
import { PaymentTypesUpdateInput } from "./PaymentTypesUpdateInput";
import { DocumentPaymentsFindManyArgs } from "../../documentPayments/base/DocumentPaymentsFindManyArgs";
import { DocumentPayments } from "../../documentPayments/base/DocumentPayments";
import { DocumentPaymentsWhereUniqueInput } from "../../documentPayments/base/DocumentPaymentsWhereUniqueInput";
import { PaymentChannelsFindManyArgs } from "../../paymentChannels/base/PaymentChannelsFindManyArgs";
import { PaymentChannels } from "../../paymentChannels/base/PaymentChannels";
import { PaymentChannelsWhereUniqueInput } from "../../paymentChannels/base/PaymentChannelsWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PaymentTypesControllerBase {
  constructor(
    protected readonly service: PaymentTypesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentTypes })
  @nestAccessControl.UseRoles({
    resource: "PaymentTypes",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PaymentTypesCreateInput,
  })
  async createPaymentTypes(
    @common.Body() data: PaymentTypesCreateInput
  ): Promise<PaymentTypes> {
    return await this.service.createPaymentTypes({
      data: data,
      select: {
        canSettle: true,
        createdAt: true,
        deletedAt: true,
        displayName: true,
        enabled: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentTypes] })
  @ApiNestedQuery(PaymentTypesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentTypes",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paymentTypesItems(
    @common.Req() request: Request
  ): Promise<PaymentTypes[]> {
    const args = plainToClass(PaymentTypesFindManyArgs, request.query);
    return this.service.paymentTypesItems({
      ...args,
      select: {
        canSettle: true,
        createdAt: true,
        deletedAt: true,
        displayName: true,
        enabled: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentTypes })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentTypes",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paymentTypes(
    @common.Param() params: PaymentTypesWhereUniqueInput
  ): Promise<PaymentTypes | null> {
    const result = await this.service.paymentTypes({
      where: params,
      select: {
        canSettle: true,
        createdAt: true,
        deletedAt: true,
        displayName: true,
        enabled: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: PaymentTypes })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentTypes",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PaymentTypesUpdateInput,
  })
  async updatePaymentTypes(
    @common.Param() params: PaymentTypesWhereUniqueInput,
    @common.Body() data: PaymentTypesUpdateInput
  ): Promise<PaymentTypes | null> {
    try {
      return await this.service.updatePaymentTypes({
        where: params,
        data: data,
        select: {
          canSettle: true,
          createdAt: true,
          deletedAt: true,
          displayName: true,
          enabled: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: PaymentTypes })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentTypes",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePaymentTypes(
    @common.Param() params: PaymentTypesWhereUniqueInput
  ): Promise<PaymentTypes | null> {
    try {
      return await this.service.deletePaymentTypes({
        where: params,
        select: {
          canSettle: true,
          createdAt: true,
          deletedAt: true,
          displayName: true,
          enabled: true,
          id: true,
          name: true,
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
    @common.Param() params: PaymentTypesWhereUniqueInput
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
    resource: "PaymentTypes",
    action: "update",
    possession: "any",
  })
  async connectDocumentPaymentsItems(
    @common.Param() params: PaymentTypesWhereUniqueInput,
    @common.Body() body: DocumentPaymentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documentPaymentsItems: {
        connect: body,
      },
    };
    await this.service.updatePaymentTypes({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/documentPaymentsItems")
  @nestAccessControl.UseRoles({
    resource: "PaymentTypes",
    action: "update",
    possession: "any",
  })
  async updateDocumentPaymentsItems(
    @common.Param() params: PaymentTypesWhereUniqueInput,
    @common.Body() body: DocumentPaymentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documentPaymentsItems: {
        set: body,
      },
    };
    await this.service.updatePaymentTypes({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/documentPaymentsItems")
  @nestAccessControl.UseRoles({
    resource: "PaymentTypes",
    action: "update",
    possession: "any",
  })
  async disconnectDocumentPaymentsItems(
    @common.Param() params: PaymentTypesWhereUniqueInput,
    @common.Body() body: DocumentPaymentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documentPaymentsItems: {
        disconnect: body,
      },
    };
    await this.service.updatePaymentTypes({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/paymentChannelsItems")
  @ApiNestedQuery(PaymentChannelsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentChannels",
    action: "read",
    possession: "any",
  })
  async findPaymentChannelsItems(
    @common.Req() request: Request,
    @common.Param() params: PaymentTypesWhereUniqueInput
  ): Promise<PaymentChannels[]> {
    const query = plainToClass(PaymentChannelsFindManyArgs, request.query);
    const results = await this.service.findPaymentChannelsItems(params.id, {
      ...query,
      select: {
        accountNumber: true,
        channel: true,
        createdAt: true,
        deletedAt: true,
        enabled: true,
        id: true,
        payableId: true,
        payableType: true,

        paymentType: {
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

  @common.Post("/:id/paymentChannelsItems")
  @nestAccessControl.UseRoles({
    resource: "PaymentTypes",
    action: "update",
    possession: "any",
  })
  async connectPaymentChannelsItems(
    @common.Param() params: PaymentTypesWhereUniqueInput,
    @common.Body() body: PaymentChannelsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentChannelsItems: {
        connect: body,
      },
    };
    await this.service.updatePaymentTypes({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/paymentChannelsItems")
  @nestAccessControl.UseRoles({
    resource: "PaymentTypes",
    action: "update",
    possession: "any",
  })
  async updatePaymentChannelsItems(
    @common.Param() params: PaymentTypesWhereUniqueInput,
    @common.Body() body: PaymentChannelsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentChannelsItems: {
        set: body,
      },
    };
    await this.service.updatePaymentTypes({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/paymentChannelsItems")
  @nestAccessControl.UseRoles({
    resource: "PaymentTypes",
    action: "update",
    possession: "any",
  })
  async disconnectPaymentChannelsItems(
    @common.Param() params: PaymentTypesWhereUniqueInput,
    @common.Body() body: PaymentChannelsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentChannelsItems: {
        disconnect: body,
      },
    };
    await this.service.updatePaymentTypes({
      where: params,
      data,
      select: { id: true },
    });
  }
}
