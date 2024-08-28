import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DocumentPaymentsResolverBase } from "./base/documentPayments.resolver.base";
import { DocumentPayments } from "./base/DocumentPayments";
import { DocumentPaymentsService } from "./documentPayments.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DocumentPayments)
export class DocumentPaymentsResolver extends DocumentPaymentsResolverBase {
  constructor(
    protected readonly service: DocumentPaymentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
