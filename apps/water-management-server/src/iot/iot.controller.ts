import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { IoTService } from "./iot.service";

@swagger.ApiTags("ioTs")
@common.Controller("ioTs")
export class IoTController {
  constructor(protected readonly service: IoTService) {}
}
