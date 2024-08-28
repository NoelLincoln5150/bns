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
import { Taxes } from "./Taxes";
import { TaxesCountArgs } from "./TaxesCountArgs";
import { TaxesFindManyArgs } from "./TaxesFindManyArgs";
import { TaxesFindUniqueArgs } from "./TaxesFindUniqueArgs";
import { CreateTaxesArgs } from "./CreateTaxesArgs";
import { UpdateTaxesArgs } from "./UpdateTaxesArgs";
import { DeleteTaxesArgs } from "./DeleteTaxesArgs";
import { TaxesService } from "../taxes.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Taxes)
export class TaxesResolverBase {
  constructor(
    protected readonly service: TaxesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Taxes",
    action: "read",
    possession: "any",
  })
  async _taxesItemsMeta(
    @graphql.Args() args: TaxesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Taxes])
  @nestAccessControl.UseRoles({
    resource: "Taxes",
    action: "read",
    possession: "any",
  })
  async taxesItems(@graphql.Args() args: TaxesFindManyArgs): Promise<Taxes[]> {
    return this.service.taxesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Taxes, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Taxes",
    action: "read",
    possession: "own",
  })
  async taxes(
    @graphql.Args() args: TaxesFindUniqueArgs
  ): Promise<Taxes | null> {
    const result = await this.service.taxes(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Taxes)
  @nestAccessControl.UseRoles({
    resource: "Taxes",
    action: "create",
    possession: "any",
  })
  async createTaxes(@graphql.Args() args: CreateTaxesArgs): Promise<Taxes> {
    return await this.service.createTaxes({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Taxes)
  @nestAccessControl.UseRoles({
    resource: "Taxes",
    action: "update",
    possession: "any",
  })
  async updateTaxes(
    @graphql.Args() args: UpdateTaxesArgs
  ): Promise<Taxes | null> {
    try {
      return await this.service.updateTaxes({
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

  @graphql.Mutation(() => Taxes)
  @nestAccessControl.UseRoles({
    resource: "Taxes",
    action: "delete",
    possession: "any",
  })
  async deleteTaxes(
    @graphql.Args() args: DeleteTaxesArgs
  ): Promise<Taxes | null> {
    try {
      return await this.service.deleteTaxes(args);
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
