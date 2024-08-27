import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FailedJobsModuleBase } from "./base/failedJobs.module.base";
import { FailedJobsService } from "./failedJobs.service";
import { FailedJobsController } from "./failedJobs.controller";
import { FailedJobsResolver } from "./failedJobs.resolver";

@Module({
  imports: [FailedJobsModuleBase, forwardRef(() => AuthModule)],
  controllers: [FailedJobsController],
  providers: [FailedJobsService, FailedJobsResolver],
  exports: [FailedJobsService],
})
export class FailedJobsModule {}
