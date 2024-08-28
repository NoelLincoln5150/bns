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
import { Customers } from "./Customers";
import { CustomersCountArgs } from "./CustomersCountArgs";
import { CustomersFindManyArgs } from "./CustomersFindManyArgs";
import { CustomersFindUniqueArgs } from "./CustomersFindUniqueArgs";
import { CreateCustomersArgs } from "./CreateCustomersArgs";
import { UpdateCustomersArgs } from "./UpdateCustomersArgs";
import { DeleteCustomersArgs } from "./DeleteCustomersArgs";
import { B2bTransactionsFindManyArgs } from "../../b2bTransactions/base/B2bTransactionsFindManyArgs";
import { B2bTransactions } from "../../b2bTransactions/base/B2bTransactions";
import { CustomerMeterFindManyArgs } from "../../customerMeter/base/CustomerMeterFindManyArgs";
import { CustomerMeter } from "../../customerMeter/base/CustomerMeter";
import { CustomersService } from "../customers.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Customers)
export class CustomersResolverBase {
  constructor(
    protected readonly service: CustomersService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Customers",
    action: "read",
    possession: "any",
  })
  async _customersItemsMeta(
    @graphql.Args() args: CustomersCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Customers])
  @nestAccessControl.UseRoles({
    resource: "Customers",
    action: "read",
    possession: "any",
  })
  async customersItems(
    @graphql.Args() args: CustomersFindManyArgs
  ): Promise<Customers[]> {
    return this.service.customersItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Customers, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Customers",
    action: "read",
    possession: "own",
  })
  async customers(
    @graphql.Args() args: CustomersFindUniqueArgs
  ): Promise<Customers | null> {
    const result = await this.service.customers(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Customers)
  @nestAccessControl.UseRoles({
    resource: "Customers",
    action: "create",
    possession: "any",
  })
  async createCustomers(
    @graphql.Args() args: CreateCustomersArgs
  ): Promise<Customers> {
    return await this.service.createCustomers({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Customers)
  @nestAccessControl.UseRoles({
    resource: "Customers",
    action: "update",
    possession: "any",
  })
  async updateCustomers(
    @graphql.Args() args: UpdateCustomersArgs
  ): Promise<Customers | null> {
    try {
      return await this.service.updateCustomers({
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

  @graphql.Mutation(() => Customers)
  @nestAccessControl.UseRoles({
    resource: "Customers",
    action: "delete",
    possession: "any",
  })
  async deleteCustomers(
    @graphql.Args() args: DeleteCustomersArgs
  ): Promise<Customers | null> {
    try {
      return await this.service.deleteCustomers(args);
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
  @graphql.ResolveField(() => [B2bTransactions], {
    name: "b2bTransactionsItems",
  })
  @nestAccessControl.UseRoles({
    resource: "B2bTransactions",
    action: "read",
    possession: "any",
  })
  async findB2bTransactionsItems(
    @graphql.Parent() parent: Customers,
    @graphql.Args() args: B2bTransactionsFindManyArgs
  ): Promise<B2bTransactions[]> {
    const results = await this.service.findB2bTransactionsItems(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [CustomerMeter], { name: "customerMeters" })
  @nestAccessControl.UseRoles({
    resource: "CustomerMeter",
    action: "read",
    possession: "any",
  })
  async findCustomerMeters(
    @graphql.Parent() parent: Customers,
    @graphql.Args() args: CustomerMeterFindManyArgs
  ): Promise<CustomerMeter[]> {
    const results = await this.service.findCustomerMeters(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
