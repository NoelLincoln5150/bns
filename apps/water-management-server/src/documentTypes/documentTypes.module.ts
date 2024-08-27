import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DocumentTypesModuleBase } from "./base/documentTypes.module.base";
import { DocumentTypesService } from "./documentTypes.service";
import { DocumentTypesController } from "./documentTypes.controller";
import { DocumentTypesResolver } from "./documentTypes.resolver";

@Module({
  imports: [DocumentTypesModuleBase, forwardRef(() => AuthModule)],
  controllers: [DocumentTypesController],
  providers: [DocumentTypesService, DocumentTypesResolver],
  exports: [DocumentTypesService],
})
export class DocumentTypesModule {}
