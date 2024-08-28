import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DocumentsModuleBase } from "./base/documents.module.base";
import { DocumentsService } from "./documents.service";
import { DocumentsController } from "./documents.controller";
import { DocumentsResolver } from "./documents.resolver";

@Module({
  imports: [DocumentsModuleBase, forwardRef(() => AuthModule)],
  controllers: [DocumentsController],
  providers: [DocumentsService, DocumentsResolver],
  exports: [DocumentsService],
})
export class DocumentsModule {}
