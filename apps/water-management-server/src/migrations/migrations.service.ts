import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MigrationsServiceBase } from "./base/migrations.service.base";

@Injectable()
export class MigrationsService extends MigrationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
