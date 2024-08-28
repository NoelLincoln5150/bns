import * as graphql from "@nestjs/graphql";
import { IoTService } from "./iot.service";

export class IoTResolver {
  constructor(protected readonly service: IoTService) {}
}
