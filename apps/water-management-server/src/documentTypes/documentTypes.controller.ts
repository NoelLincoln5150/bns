import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DocumentTypesService } from "./documentTypes.service";
import { DocumentTypesControllerBase } from "./base/documentTypes.controller.base";

@swagger.ApiTags("documentTypes")
@common.Controller("documentTypes")
export class DocumentTypesController extends DocumentTypesControllerBase {
  constructor(
    protected readonly service: DocumentTypesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
