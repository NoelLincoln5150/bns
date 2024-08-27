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
import { Logs } from "./Logs";
import { LogsCountArgs } from "./LogsCountArgs";
import { LogsFindManyArgs } from "./LogsFindManyArgs";
import { LogsFindUniqueArgs } from "./LogsFindUniqueArgs";
import { DeleteLogsArgs } from "./DeleteLogsArgs";
import { LogsService } from "../logs.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Logs)
export class LogsResolverBase {
  constructor(
    protected readonly service: LogsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Logs",
    action: "read",
    possession: "any",
  })
  async _logsItemsMeta(
    @graphql.Args() args: LogsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Logs])
  @nestAccessControl.UseRoles({
    resource: "Logs",
    action: "read",
    possession: "any",
  })
  async logsItems(@graphql.Args() args: LogsFindManyArgs): Promise<Logs[]> {
    return this.service.logsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Logs, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Logs",
    action: "read",
    possession: "own",
  })
  async logs(@graphql.Args() args: LogsFindUniqueArgs): Promise<Logs | null> {
    const result = await this.service.logs(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Logs)
  @nestAccessControl.UseRoles({
    resource: "Logs",
    action: "delete",
    possession: "any",
  })
  async deleteLogs(@graphql.Args() args: DeleteLogsArgs): Promise<Logs | null> {
    try {
      return await this.service.deleteLogs(args);
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
