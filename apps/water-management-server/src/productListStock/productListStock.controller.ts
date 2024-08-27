import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductListStockService } from "./productListStock.service";
import { ProductListStockControllerBase } from "./base/productListStock.controller.base";

@swagger.ApiTags("productListStocks")
@common.Controller("productListStocks")
export class ProductListStockController extends ProductListStockControllerBase {
  constructor(
    protected readonly service: ProductListStockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
