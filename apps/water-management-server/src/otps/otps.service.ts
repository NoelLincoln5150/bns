import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OtpsServiceBase } from "./base/otps.service.base";

@Injectable()
export class OtpsService extends OtpsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
