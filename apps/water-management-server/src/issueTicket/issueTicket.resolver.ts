import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IssueTicketResolverBase } from "./base/issueTicket.resolver.base";
import { IssueTicket } from "./base/IssueTicket";
import { IssueTicketService } from "./issueTicket.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IssueTicket)
export class IssueTicketResolver extends IssueTicketResolverBase {
  constructor(
    protected readonly service: IssueTicketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
