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
import { Alert } from "./Alert";
import { AlertCountArgs } from "./AlertCountArgs";
import { AlertFindManyArgs } from "./AlertFindManyArgs";
import { AlertFindUniqueArgs } from "./AlertFindUniqueArgs";
import { CreateAlertArgs } from "./CreateAlertArgs";
import { UpdateAlertArgs } from "./UpdateAlertArgs";
import { DeleteAlertArgs } from "./DeleteAlertArgs";
import { PrepaidMeter } from "../../prepaidMeter/base/PrepaidMeter";
import { AlertService } from "../alert.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Alert)
export class AlertResolverBase {
  constructor(
    protected readonly service: AlertService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Alert",
    action: "read",
    possession: "any",
  })
  async _alertsMeta(
    @graphql.Args() args: AlertCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Alert])
  @nestAccessControl.UseRoles({
    resource: "Alert",
    action: "read",
    possession: "any",
  })
  async alerts(@graphql.Args() args: AlertFindManyArgs): Promise<Alert[]> {
    return this.service.alerts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Alert, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Alert",
    action: "read",
    possession: "own",
  })
  async alert(
    @graphql.Args() args: AlertFindUniqueArgs
  ): Promise<Alert | null> {
    const result = await this.service.alert(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Alert)
  @nestAccessControl.UseRoles({
    resource: "Alert",
    action: "create",
    possession: "any",
  })
  async createAlert(@graphql.Args() args: CreateAlertArgs): Promise<Alert> {
    return await this.service.createAlert({
      ...args,
      data: {
        ...args.data,

        prepaidMeter: args.data.prepaidMeter
          ? {
              connect: args.data.prepaidMeter,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Alert)
  @nestAccessControl.UseRoles({
    resource: "Alert",
    action: "update",
    possession: "any",
  })
  async updateAlert(
    @graphql.Args() args: UpdateAlertArgs
  ): Promise<Alert | null> {
    try {
      return await this.service.updateAlert({
        ...args,
        data: {
          ...args.data,

          prepaidMeter: args.data.prepaidMeter
            ? {
                connect: args.data.prepaidMeter,
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

  @graphql.Mutation(() => Alert)
  @nestAccessControl.UseRoles({
    resource: "Alert",
    action: "delete",
    possession: "any",
  })
  async deleteAlert(
    @graphql.Args() args: DeleteAlertArgs
  ): Promise<Alert | null> {
    try {
      return await this.service.deleteAlert(args);
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
  @graphql.ResolveField(() => PrepaidMeter, {
    nullable: true,
    name: "prepaidMeter",
  })
  @nestAccessControl.UseRoles({
    resource: "PrepaidMeter",
    action: "read",
    possession: "any",
  })
  async getPrepaidMeter(
    @graphql.Parent() parent: Alert
  ): Promise<PrepaidMeter | null> {
    const result = await this.service.getPrepaidMeter(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
