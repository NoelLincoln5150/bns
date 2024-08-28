import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonalAccessTokensServiceBase } from "./base/personalAccessTokens.service.base";

@Injectable()
export class PersonalAccessTokensService extends PersonalAccessTokensServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
