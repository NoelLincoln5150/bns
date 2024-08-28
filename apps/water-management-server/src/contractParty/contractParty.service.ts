import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractPartyServiceBase } from "./base/contractParty.service.base";

@Injectable()
export class ContractPartyService extends ContractPartyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
