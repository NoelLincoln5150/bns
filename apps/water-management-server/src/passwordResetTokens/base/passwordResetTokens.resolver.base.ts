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
import { PasswordResetTokens } from "./PasswordResetTokens";
import { PasswordResetTokensCountArgs } from "./PasswordResetTokensCountArgs";
import { PasswordResetTokensFindManyArgs } from "./PasswordResetTokensFindManyArgs";
import { PasswordResetTokensFindUniqueArgs } from "./PasswordResetTokensFindUniqueArgs";
import { CreatePasswordResetTokensArgs } from "./CreatePasswordResetTokensArgs";
import { UpdatePasswordResetTokensArgs } from "./UpdatePasswordResetTokensArgs";
import { DeletePasswordResetTokensArgs } from "./DeletePasswordResetTokensArgs";
import { PasswordResetTokensService } from "../passwordResetTokens.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PasswordResetTokens)
export class PasswordResetTokensResolverBase {
  constructor(
    protected readonly service: PasswordResetTokensService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PasswordResetTokens",
    action: "read",
    possession: "any",
  })
  async _passwordResetTokensItemsMeta(
    @graphql.Args() args: PasswordResetTokensCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PasswordResetTokens])
  @nestAccessControl.UseRoles({
    resource: "PasswordResetTokens",
    action: "read",
    possession: "any",
  })
  async passwordResetTokensItems(
    @graphql.Args() args: PasswordResetTokensFindManyArgs
  ): Promise<PasswordResetTokens[]> {
    return this.service.passwordResetTokensItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PasswordResetTokens, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PasswordResetTokens",
    action: "read",
    possession: "own",
  })
  async passwordResetTokens(
    @graphql.Args() args: PasswordResetTokensFindUniqueArgs
  ): Promise<PasswordResetTokens | null> {
    const result = await this.service.passwordResetTokens(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PasswordResetTokens)
  @nestAccessControl.UseRoles({
    resource: "PasswordResetTokens",
    action: "create",
    possession: "any",
  })
  async createPasswordResetTokens(
    @graphql.Args() args: CreatePasswordResetTokensArgs
  ): Promise<PasswordResetTokens> {
    return await this.service.createPasswordResetTokens({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PasswordResetTokens)
  @nestAccessControl.UseRoles({
    resource: "PasswordResetTokens",
    action: "update",
    possession: "any",
  })
  async updatePasswordResetTokens(
    @graphql.Args() args: UpdatePasswordResetTokensArgs
  ): Promise<PasswordResetTokens | null> {
    try {
      return await this.service.updatePasswordResetTokens({
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

  @graphql.Mutation(() => PasswordResetTokens)
  @nestAccessControl.UseRoles({
    resource: "PasswordResetTokens",
    action: "delete",
    possession: "any",
  })
  async deletePasswordResetTokens(
    @graphql.Args() args: DeletePasswordResetTokensArgs
  ): Promise<PasswordResetTokens | null> {
    try {
      return await this.service.deletePasswordResetTokens(args);
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
