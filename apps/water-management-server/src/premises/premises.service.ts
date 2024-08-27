import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PremisesServiceBase } from "./base/premises.service.base";

@Injectable()
export class PremisesService extends PremisesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
