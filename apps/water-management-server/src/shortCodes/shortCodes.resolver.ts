import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ShortCodesResolverBase } from "./base/shortCodes.resolver.base";
import { ShortCodes } from "./base/ShortCodes";
import { ShortCodesService } from "./shortCodes.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ShortCodes)
export class ShortCodesResolver extends ShortCodesResolverBase {
  constructor(
    protected readonly service: ShortCodesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
