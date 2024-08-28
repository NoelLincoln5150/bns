import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DashboardService } from "./dashboard.service";
import { DashboardData } from "./DashboardData";

@swagger.ApiTags("dashboards")
@common.Controller("dashboards")
export class DashboardController {
  constructor(protected readonly service: DashboardService) {}

  @common.Get("/")
  @swagger.ApiOkResponse({
    type: DashboardData
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetDashboardData(
    @common.Body()
    body: string
  ): Promise<DashboardData> {
        return this.service.GetDashboardData(body);
      }
}
