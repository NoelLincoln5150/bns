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
import { Notes } from "./Notes";
import { NotesCountArgs } from "./NotesCountArgs";
import { NotesFindManyArgs } from "./NotesFindManyArgs";
import { NotesFindUniqueArgs } from "./NotesFindUniqueArgs";
import { DeleteNotesArgs } from "./DeleteNotesArgs";
import { NotesService } from "../notes.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Notes)
export class NotesResolverBase {
  constructor(
    protected readonly service: NotesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Notes",
    action: "read",
    possession: "any",
  })
  async _notesItemsMeta(
    @graphql.Args() args: NotesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Notes])
  @nestAccessControl.UseRoles({
    resource: "Notes",
    action: "read",
    possession: "any",
  })
  async notesItems(@graphql.Args() args: NotesFindManyArgs): Promise<Notes[]> {
    return this.service.notesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Notes, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Notes",
    action: "read",
    possession: "own",
  })
  async notes(
    @graphql.Args() args: NotesFindUniqueArgs
  ): Promise<Notes | null> {
    const result = await this.service.notes(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Notes)
  @nestAccessControl.UseRoles({
    resource: "Notes",
    action: "delete",
    possession: "any",
  })
  async deleteNotes(
    @graphql.Args() args: DeleteNotesArgs
  ): Promise<Notes | null> {
    try {
      return await this.service.deleteNotes(args);
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
