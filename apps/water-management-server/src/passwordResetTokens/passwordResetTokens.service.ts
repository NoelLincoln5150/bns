import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordResetTokensServiceBase } from "./base/passwordResetTokens.service.base";

@Injectable()
export class PasswordResetTokensService extends PasswordResetTokensServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
