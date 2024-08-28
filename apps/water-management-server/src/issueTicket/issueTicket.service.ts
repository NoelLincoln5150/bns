import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IssueTicketServiceBase } from "./base/issueTicket.service.base";

@Injectable()
export class IssueTicketService extends IssueTicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
