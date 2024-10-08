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
import { PasswordResets } from "./PasswordResets";
import { PasswordResetsCountArgs } from "./PasswordResetsCountArgs";
import { PasswordResetsFindManyArgs } from "./PasswordResetsFindManyArgs";
import { PasswordResetsFindUniqueArgs } from "./PasswordResetsFindUniqueArgs";
import { CreatePasswordResetsArgs } from "./CreatePasswordResetsArgs";
import { UpdatePasswordResetsArgs } from "./UpdatePasswordResetsArgs";
import { DeletePasswordResetsArgs } from "./DeletePasswordResetsArgs";
import { PasswordResetsService } from "../passwordResets.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PasswordResets)
export class PasswordResetsResolverBase {
  constructor(
    protected readonly service: PasswordResetsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PasswordResets",
    action: "read",
    possession: "any",
  })
  async _passwordResetsItemsMeta(
    @graphql.Args() args: PasswordResetsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PasswordResets])
  @nestAccessControl.UseRoles({
    resource: "PasswordResets",
    action: "read",
    possession: "any",
  })
  async passwordResetsItems(
    @graphql.Args() args: PasswordResetsFindManyArgs
  ): Promise<PasswordResets[]> {
    return this.service.passwordResetsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PasswordResets, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PasswordResets",
    action: "read",
    possession: "own",
  })
  async passwordResets(
    @graphql.Args() args: PasswordResetsFindUniqueArgs
  ): Promise<PasswordResets | null> {
    const result = await this.service.passwordResets(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PasswordResets)
  @nestAccessControl.UseRoles({
    resource: "PasswordResets",
    action: "create",
    possession: "any",
  })
  async createPasswordResets(
    @graphql.Args() args: CreatePasswordResetsArgs
  ): Promise<PasswordResets> {
    return await this.service.createPasswordResets({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PasswordResets)
  @nestAccessControl.UseRoles({
    resource: "PasswordResets",
    action: "update",
    possession: "any",
  })
  async updatePasswordResets(
    @graphql.Args() args: UpdatePasswordResetsArgs
  ): Promise<PasswordResets | null> {
    try {
      return await this.service.updatePasswordResets({
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

  @graphql.Mutation(() => PasswordResets)
  @nestAccessControl.UseRoles({
    resource: "PasswordResets",
    action: "delete",
    possession: "any",
  })
  async deletePasswordResets(
    @graphql.Args() args: DeletePasswordResetsArgs
  ): Promise<PasswordResets | null> {
    try {
      return await this.service.deletePasswordResets(args);
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
