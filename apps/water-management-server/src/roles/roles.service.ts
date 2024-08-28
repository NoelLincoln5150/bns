import { Injectable } from "@nestjs/common";

@Injectable()
export class RolesService {
  constructor() {}
  async SetPermissions(args: "SuperAdmin" | "Admin" | "User"): Promise<string> {
    throw new Error("Not implemented");
  }
}
