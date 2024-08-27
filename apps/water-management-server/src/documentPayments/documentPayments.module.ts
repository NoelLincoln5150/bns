import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DocumentPaymentsModuleBase } from "./base/documentPayments.module.base";
import { DocumentPaymentsService } from "./documentPayments.service";
import { DocumentPaymentsController } from "./documentPayments.controller";
import { DocumentPaymentsResolver } from "./documentPayments.resolver";

@Module({
  imports: [DocumentPaymentsModuleBase, forwardRef(() => AuthModule)],
  controllers: [DocumentPaymentsController],
  providers: [DocumentPaymentsService, DocumentPaymentsResolver],
  exports: [DocumentPaymentsService],
})
export class DocumentPaymentsModule {}
