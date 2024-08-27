import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordResetsServiceBase } from "./base/passwordResets.service.base";

@Injectable()
export class PasswordResetsService extends PasswordResetsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
