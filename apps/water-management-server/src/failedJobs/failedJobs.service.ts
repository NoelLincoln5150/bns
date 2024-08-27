import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FailedJobsServiceBase } from "./base/failedJobs.service.base";

@Injectable()
export class FailedJobsService extends FailedJobsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
