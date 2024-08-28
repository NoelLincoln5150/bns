import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RolesService } from "./roles.service";

@swagger.ApiTags("roles")
@common.Controller("roles")
export class RolesController {
  constructor(protected readonly service: RolesService) {}

  @common.Post("/permissions/set")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SetPermissions(
    @common.Body()
    body: "SuperAdmin" | "Admin" | "User"
  ): Promise<string> {
        return this.service.SetPermissions(body);
      }
}
