import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentPaymentsServiceBase } from "./base/documentPayments.service.base";

@Injectable()
export class DocumentPaymentsService extends DocumentPaymentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
