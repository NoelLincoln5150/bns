import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IssueTicketService } from "./issueTicket.service";
import { IssueTicketControllerBase } from "./base/issueTicket.controller.base";

@swagger.ApiTags("issueTickets")
@common.Controller("issueTickets")
export class IssueTicketController extends IssueTicketControllerBase {
  constructor(
    protected readonly service: IssueTicketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
