import { Module } from "@nestjs/common";
import { UsageModule } from "./usage/usage.module";
import { MeterModule } from "./meter/meter.module";
import { TicketModule } from "./ticket/ticket.module";
import { RoleModule } from "./role/role.module";
import { UserModule } from "./user/user.module";
import { PrepaidMeterModule } from "./prepaidMeter/prepaidMeter.module";
import { CommandModule } from "./command/command.module";
import { MeterDataModule } from "./meterData/meterData.module";
import { AlertModule } from "./alert/alert.module";
import { IoTModule } from "./iot/iot.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./mqtt/kafka.module";
import { MqttModule } from "./mqtt/mqtt.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    MqttModule,
    KafkaModule,
    UsageModule,
    MeterModule,
    TicketModule,
    RoleModule,
    UserModule,
    PrepaidMeterModule,
    CommandModule,
    MeterDataModule,
    AlertModule,
    IoTModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
