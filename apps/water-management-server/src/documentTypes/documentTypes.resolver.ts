import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DocumentTypesResolverBase } from "./base/documentTypes.resolver.base";
import { DocumentTypes } from "./base/DocumentTypes";
import { DocumentTypesService } from "./documentTypes.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DocumentTypes)
export class DocumentTypesResolver extends DocumentTypesResolverBase {
  constructor(
    protected readonly service: DocumentTypesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
