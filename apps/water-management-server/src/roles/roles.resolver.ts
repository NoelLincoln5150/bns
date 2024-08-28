import * as graphql from "@nestjs/graphql";
import { RolesService } from "./roles.service";

export class RolesResolver {
  constructor(protected readonly service: RolesService) {}

  @graphql.Mutation(() => String)
  async SetPermissions(
    @graphql.Args()
    args: "SuperAdmin" | "Admin" | "User"
  ): Promise<string> {
    return this.service.SetPermissions(args);
  }
}
