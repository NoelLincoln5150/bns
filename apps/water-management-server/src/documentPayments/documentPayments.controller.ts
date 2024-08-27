import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DocumentPaymentsService } from "./documentPayments.service";
import { DocumentPaymentsControllerBase } from "./base/documentPayments.controller.base";

@swagger.ApiTags("documentPayments")
@common.Controller("documentPayments")
export class DocumentPaymentsController extends DocumentPaymentsControllerBase {
  constructor(
    protected readonly service: DocumentPaymentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
