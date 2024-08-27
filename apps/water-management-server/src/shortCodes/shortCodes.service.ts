import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShortCodesServiceBase } from "./base/shortCodes.service.base";

@Injectable()
export class ShortCodesService extends ShortCodesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
