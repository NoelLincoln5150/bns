import { Module } from "@nestjs/common";
import { MeterModule } from "./meter/meter.module";
import { TicketModule } from "./ticket/ticket.module";
import { UsageModule } from "./usage/usage.module";
import { RoleModule } from "./role/role.module";
import { UserModule } from "./user/user.module";
import { AlertModule } from "./alert/alert.module";
import { PrepaidMeterModule } from "./prepaidMeter/prepaidMeter.module";
import { MeterDataModule } from "./meterData/meterData.module";
import { CommandModule } from "./command/command.module";
import { CustomerMeterModule } from "./customerMeter/customerMeter.module";
import { DocumentsModule } from "./documents/documents.module";
import { CustomersModule } from "./customers/customers.module";
import { StocksModule } from "./stocks/stocks.module";
import { PremisesModule } from "./premises/premises.module";
import { PersonalAccessTokensModule } from "./personalAccessTokens/personalAccessTokens.module";
import { SuppliersModule } from "./suppliers/suppliers.module";
import { TaxablesModule } from "./taxables/taxables.module";
import { PaymentAccountsModule } from "./paymentAccounts/paymentAccounts.module";
import { PasswordResetTokensModule } from "./passwordResetTokens/passwordResetTokens.module";
import { ShortCodesModule } from "./shortCodes/shortCodes.module";
import { PremisesWaterSourceModule } from "./premisesWaterSource/premisesWaterSource.module";
import { DocumentNumbersModule } from "./documentNumbers/documentNumbers.module";
import { DocumentTypesModule } from "./documentTypes/documentTypes.module";
import { RevenueSharesModule } from "./revenueShares/revenueShares.module";
import { MetersModule } from "./meters/meters.module";
import { DocumentPaymentsModule } from "./documentPayments/documentPayments.module";
import { ProductListStockModule } from "./productListStock/productListStock.module";
import { TaxesModule } from "./taxes/taxes.module";
import { WaterTokensModule } from "./waterTokens/waterTokens.module";
import { LogsModule } from "./logs/logs.module";
import { TransactionCostsModule } from "./transactionCosts/transactionCosts.module";
import { WaterSourcesModule } from "./waterSources/waterSources.module";
import { ProductsModule } from "./products/products.module";
import { FailedJobsModule } from "./failedJobs/failedJobs.module";
import { ProductListsModule } from "./productLists/productLists.module";
import { MeterTypesModule } from "./meterTypes/meterTypes.module";
import { OtpsModule } from "./otps/otps.module";
import { PasswordResetsModule } from "./passwordResets/passwordResets.module";
import { PaymentTypesModule } from "./paymentTypes/paymentTypes.module";
import { MigrationsModule } from "./migrations/migrations.module";
import { PaymentChannelsModule } from "./paymentChannels/paymentChannels.module";
import { NotesModule } from "./notes/notes.module";
import { B2bTransactionsModule } from "./b2bTransactions/b2bTransactions.module";
import { BankPaybillModule } from "./bankPaybill/bankPaybill.module";
import { C2bTransactionsModule } from "./c2bTransactions/c2bTransactions.module";
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
    MeterModule,
    TicketModule,
    UsageModule,
    RoleModule,
    UserModule,
    AlertModule,
    PrepaidMeterModule,
    MeterDataModule,
    CommandModule,
    CustomerMeterModule,
    DocumentsModule,
    CustomersModule,
    StocksModule,
    PremisesModule,
    PersonalAccessTokensModule,
    SuppliersModule,
    TaxablesModule,
    PaymentAccountsModule,
    PasswordResetTokensModule,
    ShortCodesModule,
    PremisesWaterSourceModule,
    DocumentNumbersModule,
    DocumentTypesModule,
    RevenueSharesModule,
    MetersModule,
    DocumentPaymentsModule,
    ProductListStockModule,
    TaxesModule,
    WaterTokensModule,
    LogsModule,
    TransactionCostsModule,
    WaterSourcesModule,
    ProductsModule,
    FailedJobsModule,
    ProductListsModule,
    MeterTypesModule,
    OtpsModule,
    PasswordResetsModule,
    PaymentTypesModule,
    MigrationsModule,
    PaymentChannelsModule,
    NotesModule,
    B2bTransactionsModule,
    BankPaybillModule,
    C2bTransactionsModule,
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
