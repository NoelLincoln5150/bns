import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LogsModuleBase } from "./base/logs.module.base";
import { LogsService } from "./logs.service";
import { LogsController } from "./logs.controller";
import { LogsResolver } from "./logs.resolver";

@Module({
  imports: [LogsModuleBase, forwardRef(() => AuthModule)],
  controllers: [LogsController],
  providers: [LogsService, LogsResolver],
  exports: [LogsService],
})
export class LogsModule {}
