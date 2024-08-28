import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DocumentNumbersModuleBase } from "./base/documentNumbers.module.base";
import { DocumentNumbersService } from "./documentNumbers.service";
import { DocumentNumbersController } from "./documentNumbers.controller";
import { DocumentNumbersResolver } from "./documentNumbers.resolver";

@Module({
  imports: [DocumentNumbersModuleBase, forwardRef(() => AuthModule)],
  controllers: [DocumentNumbersController],
  providers: [DocumentNumbersService, DocumentNumbersResolver],
  exports: [DocumentNumbersService],
})
export class DocumentNumbersModule {}
