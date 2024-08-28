import { Module } from "@nestjs/common";
import { IoTService } from "./iot.service";
import { IoTController } from "./iot.controller";
import { IoTResolver } from "./iot.resolver";

@Module({
  controllers: [IoTController],
  providers: [IoTService, IoTResolver],
  exports: [IoTService],
})
export class IoTModule {}
