import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CategoryProductService } from "./categoryProduct.service";
import { CategoryProductControllerBase } from "./base/categoryProduct.controller.base";

@swagger.ApiTags("categoryProducts")
@common.Controller("categoryProducts")
export class CategoryProductController extends CategoryProductControllerBase {
  constructor(
    protected readonly service: CategoryProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
