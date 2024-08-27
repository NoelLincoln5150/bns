import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BankPaybillService } from "./bankPaybill.service";
import { BankPaybillControllerBase } from "./base/bankPaybill.controller.base";

@swagger.ApiTags("bankPaybills")
@common.Controller("bankPaybills")
export class BankPaybillController extends BankPaybillControllerBase {
  constructor(
    protected readonly service: BankPaybillService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
