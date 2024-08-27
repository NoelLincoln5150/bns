import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContractPartyService } from "./contractParty.service";
import { ContractPartyControllerBase } from "./base/contractParty.controller.base";

@swagger.ApiTags("contractParties")
@common.Controller("contractParties")
export class ContractPartyController extends ContractPartyControllerBase {
  constructor(
    protected readonly service: ContractPartyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
