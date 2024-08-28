import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DocumentsService } from "./documents.service";
import { DocumentsControllerBase } from "./base/documents.controller.base";

@swagger.ApiTags("documents")
@common.Controller("documents")
export class DocumentsController extends DocumentsControllerBase {
  constructor(
    protected readonly service: DocumentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
