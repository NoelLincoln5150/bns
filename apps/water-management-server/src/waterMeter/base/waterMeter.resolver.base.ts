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
import { WaterMeter } from "./WaterMeter";
import { WaterMeterCountArgs } from "./WaterMeterCountArgs";
import { WaterMeterFindManyArgs } from "./WaterMeterFindManyArgs";
import { WaterMeterFindUniqueArgs } from "./WaterMeterFindUniqueArgs";
import { CreateWaterMeterArgs } from "./CreateWaterMeterArgs";
import { UpdateWaterMeterArgs } from "./UpdateWaterMeterArgs";
import { DeleteWaterMeterArgs } from "./DeleteWaterMeterArgs";
import { WaterMeterService } from "../waterMeter.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WaterMeter)
export class WaterMeterResolverBase {
  constructor(
    protected readonly service: WaterMeterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WaterMeter",
    action: "read",
    possession: "any",
  })
  async _waterMetersMeta(
    @graphql.Args() args: WaterMeterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WaterMeter])
  @nestAccessControl.UseRoles({
    resource: "WaterMeter",
    action: "read",
    possession: "any",
  })
  async waterMeters(
    @graphql.Args() args: WaterMeterFindManyArgs
  ): Promise<WaterMeter[]> {
    return this.service.waterMeters(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WaterMeter, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WaterMeter",
    action: "read",
    possession: "own",
  })
  async waterMeter(
    @graphql.Args() args: WaterMeterFindUniqueArgs
  ): Promise<WaterMeter | null> {
    const result = await this.service.waterMeter(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WaterMeter)
  @nestAccessControl.UseRoles({
    resource: "WaterMeter",
    action: "create",
    possession: "any",
  })
  async createWaterMeter(
    @graphql.Args() args: CreateWaterMeterArgs
  ): Promise<WaterMeter> {
    return await this.service.createWaterMeter({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WaterMeter)
  @nestAccessControl.UseRoles({
    resource: "WaterMeter",
    action: "update",
    possession: "any",
  })
  async updateWaterMeter(
    @graphql.Args() args: UpdateWaterMeterArgs
  ): Promise<WaterMeter | null> {
    try {
      return await this.service.updateWaterMeter({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => WaterMeter)
  @nestAccessControl.UseRoles({
    resource: "WaterMeter",
    action: "delete",
    possession: "any",
  })
  async deleteWaterMeter(
    @graphql.Args() args: DeleteWaterMeterArgs
  ): Promise<WaterMeter | null> {
    try {
      return await this.service.deleteWaterMeter(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
