import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DocumentNumbersService } from "./documentNumbers.service";
import { DocumentNumbersControllerBase } from "./base/documentNumbers.controller.base";

@swagger.ApiTags("documentNumbers")
@common.Controller("documentNumbers")
export class DocumentNumbersController extends DocumentNumbersControllerBase {
  constructor(
    protected readonly service: DocumentNumbersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
