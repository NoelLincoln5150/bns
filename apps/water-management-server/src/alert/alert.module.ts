import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AlertModuleBase } from "./base/alert.module.base";
import { AlertService } from "./alert.service";
import { AlertController } from "./alert.controller";
import { AlertResolver } from "./alert.resolver";

@Module({
  imports: [AlertModuleBase, forwardRef(() => AuthModule)],
  controllers: [AlertController],
  providers: [AlertService, AlertResolver],
  exports: [AlertService],
})
export class AlertModule {}
