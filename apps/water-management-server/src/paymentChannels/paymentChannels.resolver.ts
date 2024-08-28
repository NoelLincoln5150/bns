import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentChannelsResolverBase } from "./base/paymentChannels.resolver.base";
import { PaymentChannels } from "./base/PaymentChannels";
import { PaymentChannelsService } from "./paymentChannels.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentChannels)
export class PaymentChannelsResolver extends PaymentChannelsResolverBase {
  constructor(
    protected readonly service: PaymentChannelsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
