import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LogsServiceBase } from "./base/logs.service.base";

@Injectable()
export class LogsService extends LogsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
