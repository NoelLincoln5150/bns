import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NotesService } from "./notes.service";
import { NotesControllerBase } from "./base/notes.controller.base";

@swagger.ApiTags("notes")
@common.Controller("notes")
export class NotesController extends NotesControllerBase {
  constructor(
    protected readonly service: NotesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
