import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FailedJobsResolverBase } from "./base/failedJobs.resolver.base";
import { FailedJobs } from "./base/FailedJobs";
import { FailedJobsService } from "./failedJobs.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FailedJobs)
export class FailedJobsResolver extends FailedJobsResolverBase {
  constructor(
    protected readonly service: FailedJobsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
