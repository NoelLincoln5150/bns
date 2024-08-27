import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DocumentNumbersResolverBase } from "./base/documentNumbers.resolver.base";
import { DocumentNumbers } from "./base/DocumentNumbers";
import { DocumentNumbersService } from "./documentNumbers.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DocumentNumbers)
export class DocumentNumbersResolver extends DocumentNumbersResolverBase {
  constructor(
    protected readonly service: DocumentNumbersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
