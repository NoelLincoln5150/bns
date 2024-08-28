import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IssueTicketModuleBase } from "./base/issueTicket.module.base";
import { IssueTicketService } from "./issueTicket.service";
import { IssueTicketController } from "./issueTicket.controller";
import { IssueTicketResolver } from "./issueTicket.resolver";

@Module({
  imports: [IssueTicketModuleBase, forwardRef(() => AuthModule)],
  controllers: [IssueTicketController],
  providers: [IssueTicketService, IssueTicketResolver],
  exports: [IssueTicketService],
})
export class IssueTicketModule {}
