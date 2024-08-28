import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductListsService } from "./productLists.service";
import { ProductListsControllerBase } from "./base/productLists.controller.base";

@swagger.ApiTags("productLists")
@common.Controller("productLists")
export class ProductListsController extends ProductListsControllerBase {
  constructor(
    protected readonly service: ProductListsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
