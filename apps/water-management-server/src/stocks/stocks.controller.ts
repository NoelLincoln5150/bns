import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StocksService } from "./stocks.service";
import { StocksControllerBase } from "./base/stocks.controller.base";

@swagger.ApiTags("stocks")
@common.Controller("stocks")
export class StocksController extends StocksControllerBase {
  constructor(
    protected readonly service: StocksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
