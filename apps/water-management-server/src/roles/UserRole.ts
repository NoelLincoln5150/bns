import { User } from "../user/base/User";
import { registerEnumType } from "@nestjs/graphql";

export enum UserRole {
    SuperAdmin = "SuperAdmin",
    Admin = "Admin",
    User = "User"
}

registerEnumType(UserRole, {
    name: "UserRole",
  });