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
import { Migrations } from "./Migrations";
import { MigrationsCountArgs } from "./MigrationsCountArgs";
import { MigrationsFindManyArgs } from "./MigrationsFindManyArgs";
import { MigrationsFindUniqueArgs } from "./MigrationsFindUniqueArgs";
import { CreateMigrationsArgs } from "./CreateMigrationsArgs";
import { UpdateMigrationsArgs } from "./UpdateMigrationsArgs";
import { DeleteMigrationsArgs } from "./DeleteMigrationsArgs";
import { MigrationsService } from "../migrations.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Migrations)
export class MigrationsResolverBase {
  constructor(
    protected readonly service: MigrationsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Migrations",
    action: "read",
    possession: "any",
  })
  async _migrationsItemsMeta(
    @graphql.Args() args: MigrationsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Migrations])
  @nestAccessControl.UseRoles({
    resource: "Migrations",
    action: "read",
    possession: "any",
  })
  async migrationsItems(
    @graphql.Args() args: MigrationsFindManyArgs
  ): Promise<Migrations[]> {
    return this.service.migrationsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Migrations, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Migrations",
    action: "read",
    possession: "own",
  })
  async migrations(
    @graphql.Args() args: MigrationsFindUniqueArgs
  ): Promise<Migrations | null> {
    const result = await this.service.migrations(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Migrations)
  @nestAccessControl.UseRoles({
    resource: "Migrations",
    action: "create",
    possession: "any",
  })
  async createMigrations(
    @graphql.Args() args: CreateMigrationsArgs
  ): Promise<Migrations> {
    return await this.service.createMigrations({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Migrations)
  @nestAccessControl.UseRoles({
    resource: "Migrations",
    action: "update",
    possession: "any",
  })
  async updateMigrations(
    @graphql.Args() args: UpdateMigrationsArgs
  ): Promise<Migrations | null> {
    try {
      return await this.service.updateMigrations({
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

  @graphql.Mutation(() => Migrations)
  @nestAccessControl.UseRoles({
    resource: "Migrations",
    action: "delete",
    possession: "any",
  })
  async deleteMigrations(
    @graphql.Args() args: DeleteMigrationsArgs
  ): Promise<Migrations | null> {
    try {
      return await this.service.deleteMigrations(args);
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
