import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotesServiceBase } from "./base/notes.service.base";

@Injectable()
export class NotesService extends NotesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
