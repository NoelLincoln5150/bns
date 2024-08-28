import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MetersServiceBase } from "./base/meters.service.base";

@Injectable()
export class MetersService extends MetersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
