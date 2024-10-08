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
import { PrepaidMeter } from "./PrepaidMeter";
import { PrepaidMeterCountArgs } from "./PrepaidMeterCountArgs";
import { PrepaidMeterFindManyArgs } from "./PrepaidMeterFindManyArgs";
import { PrepaidMeterFindUniqueArgs } from "./PrepaidMeterFindUniqueArgs";
import { CreatePrepaidMeterArgs } from "./CreatePrepaidMeterArgs";
import { UpdatePrepaidMeterArgs } from "./UpdatePrepaidMeterArgs";
import { DeletePrepaidMeterArgs } from "./DeletePrepaidMeterArgs";
import { AlertFindManyArgs } from "../../alert/base/AlertFindManyArgs";
import { Alert } from "../../alert/base/Alert";
import { CommandFindManyArgs } from "../../command/base/CommandFindManyArgs";
import { Command } from "../../command/base/Command";
import { MeterDataFindManyArgs } from "../../meterData/base/MeterDataFindManyArgs";
import { MeterData } from "../../meterData/base/MeterData";
import { PrepaidMeterService } from "../prepaidMeter.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PrepaidMeter)
export class PrepaidMeterResolverBase {
  constructor(
    protected readonly service: PrepaidMeterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "read",
    possession: "any",
  })
  async _prepaidMetersMeta(
    @graphql.Args() args: PrepaidMeterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PrepaidMeter])
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "read",
    possession: "any",
  })
  async prepaidMeters(
    @graphql.Args() args: PrepaidMeterFindManyArgs
  ): Promise<PrepaidMeter[]> {
    return this.service.prepaidMeters(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PrepaidMeter, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "read",
    possession: "own",
  })
  async prepaidMeter(
    @graphql.Args() args: PrepaidMeterFindUniqueArgs
  ): Promise<PrepaidMeter | null> {
    const result = await this.service.prepaidMeter(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PrepaidMeter)
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "create",
    possession: "any",
  })
  async createPrepaidMeter(
    @graphql.Args() args: CreatePrepaidMeterArgs
  ): Promise<PrepaidMeter> {
    return await this.service.createPrepaidMeter({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PrepaidMeter)
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "update",
    possession: "any",
  })
  async updatePrepaidMeter(
    @graphql.Args() args: UpdatePrepaidMeterArgs
  ): Promise<PrepaidMeter | null> {
    try {
      return await this.service.updatePrepaidMeter({
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

  @graphql.Mutation(() => PrepaidMeter)
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "delete",
    possession: "any",
  })
  async deletePrepaidMeter(
    @graphql.Args() args: DeletePrepaidMeterArgs
  ): Promise<PrepaidMeter | null> {
    try {
      return await this.service.deletePrepaidMeter(args);
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
  @graphql.ResolveField(() => [Alert], { name: "alerts" })
  @nestAccessControl.UseRoles({
    resource: "Alert",
    action: "read",
    possession: "any",
  })
  async findAlerts(
    @graphql.Parent() parent: PrepaidMeter,
    @graphql.Args() args: AlertFindManyArgs
  ): Promise<Alert[]> {
    const results = await this.service.findAlerts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Command], { name: "commands" })
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "read",
    possession: "any",
  })
  async findCommands(
    @graphql.Parent() parent: PrepaidMeter,
    @graphql.Args() args: CommandFindManyArgs
  ): Promise<Command[]> {
    const results = await this.service.findCommands(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MeterData], { name: "meterDataItems" })
  @nestAccessControl.UseRoles({
    resource: "MeterData",
    action: "read",
    possession: "any",
  })
  async findMeterDataItems(
    @graphql.Parent() parent: PrepaidMeter,
    @graphql.Args() args: MeterDataFindManyArgs
  ): Promise<MeterData[]> {
    const results = await this.service.findMeterDataItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
