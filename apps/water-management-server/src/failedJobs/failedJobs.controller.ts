import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FailedJobsService } from "./failedJobs.service";
import { FailedJobsControllerBase } from "./base/failedJobs.controller.base";

@swagger.ApiTags("failedJobs")
@common.Controller("failedJobs")
export class FailedJobsController extends FailedJobsControllerBase {
  constructor(
    protected readonly service: FailedJobsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
