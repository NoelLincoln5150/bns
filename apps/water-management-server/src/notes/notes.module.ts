import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NotesModuleBase } from "./base/notes.module.base";
import { NotesService } from "./notes.service";
import { NotesController } from "./notes.controller";
import { NotesResolver } from "./notes.resolver";

@Module({
  imports: [NotesModuleBase, forwardRef(() => AuthModule)],
  controllers: [NotesController],
  providers: [NotesService, NotesResolver],
  exports: [NotesService],
})
export class NotesModule {}
