import * as graphql from "@nestjs/graphql";
import { DashboardData } from "./DashboardData";
import { DashboardService } from "./dashboard.service";

export class DashboardResolver {
  constructor(protected readonly service: DashboardService) {}

  @graphql.Query(() => DashboardData)
  async GetDashboardData(
    @graphql.Args("args")
    args: string
  ): Promise<DashboardData> {
    return this.service.GetDashboardData(args);
  }
}
