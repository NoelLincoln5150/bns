import { Module } from "@nestjs/common";
import { TicketModule } from "./ticket/ticket.module";
import { MeterModule } from "./meter/meter.module";
import { UsageModule } from "./usage/usage.module";
import { RoleModule } from "./role/role.module";
import { UserModule } from "./user/user.module";
import { MeterDataModule } from "./meterData/meterData.module";
import { CommandModule } from "./command/command.module";
import { AlertModule } from "./alert/alert.module";
import { PrepaidMeterModule } from "./prepaidMeter/prepaidMeter.module";
import { DocumentsModule } from "./documents/documents.module";
import { CustomersModule } from "./customers/customers.module";
import { CustomerMeterModule } from "./customerMeter/customerMeter.module";
import { PersonalAccessTokensModule } from "./personalAccessTokens/personalAccessTokens.module";
import { SuppliersModule } from "./suppliers/suppliers.module";
import { PremisesModule } from "./premises/premises.module";
import { TaxablesModule } from "./taxables/taxables.module";
import { StocksModule } from "./stocks/stocks.module";
import { DocumentPaymentsModule } from "./documentPayments/documentPayments.module";
import { RevenueSharesModule } from "./revenueShares/revenueShares.module";
import { PremisesWaterSourceModule } from "./premisesWaterSource/premisesWaterSource.module";
import { ProductListsModule } from "./productLists/productLists.module";
import { MetersModule } from "./meters/meters.module";
import { ProductListStockModule } from "./productListStock/productListStock.module";
import { TaxesModule } from "./taxes/taxes.module";
import { ProductsModule } from "./products/products.module";
import { WaterTokensModule } from "./waterTokens/waterTokens.module";
import { TransactionCostsModule } from "./transactionCosts/transactionCosts.module";
import { PaymentAccountsModule } from "./paymentAccounts/paymentAccounts.module";
import { DocumentNumbersModule } from "./documentNumbers/documentNumbers.module";
import { LogsModule } from "./logs/logs.module";
import { FailedJobsModule } from "./failedJobs/failedJobs.module";
import { PasswordResetTokensModule } from "./passwordResetTokens/passwordResetTokens.module";
import { DocumentTypesModule } from "./documentTypes/documentTypes.module";
import { WaterSourcesModule } from "./waterSources/waterSources.module";
import { ShortCodesModule } from "./shortCodes/shortCodes.module";
import { MeterTypesModule } from "./meterTypes/meterTypes.module";
import { PaymentTypesModule } from "./paymentTypes/paymentTypes.module";
import { OtpsModule } from "./otps/otps.module";
import { PaymentChannelsModule } from "./paymentChannels/paymentChannels.module";
import { PasswordResetsModule } from "./passwordResets/passwordResets.module";
import { NotesModule } from "./notes/notes.module";
import { MigrationsModule } from "./migrations/migrations.module";
import { B2bTransactionsModule } from "./b2bTransactions/b2bTransactions.module";
import { BankPaybillModule } from "./bankPaybill/bankPaybill.module";
import { C2bTransactionsModule } from "./c2bTransactions/c2bTransactions.module";
import { ContractPartyModule } from "./contractParty/contractParty.module";
import { ContractModule } from "./contract/contract.module";
import { ContactModule } from "./contact/contact.module";
import { CategoryModule } from "./category/category.module";
import { CategoryProductModule } from "./categoryProduct/categoryProduct.module";
import { PaymentModule } from "./payment/payment.module";
import { IssueTicketModule } from "./issueTicket/issueTicket.module";
import { AppUserModule } from "./appUser/appUser.module";
import { WaterMeterModule } from "./waterMeter/waterMeter.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { IoTModule } from "./iot/iot.module";
import { RolesModule } from "./roles/roles.module";
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
    TicketModule,
    MeterModule,
    UsageModule,
    RoleModule,
    UserModule,
    MeterDataModule,
    CommandModule,
    AlertModule,
    PrepaidMeterModule,
    DocumentsModule,
    CustomersModule,
    CustomerMeterModule,
    PersonalAccessTokensModule,
    SuppliersModule,
    PremisesModule,
    TaxablesModule,
    StocksModule,
    DocumentPaymentsModule,
    RevenueSharesModule,
    PremisesWaterSourceModule,
    ProductListsModule,
    MetersModule,
    ProductListStockModule,
    TaxesModule,
    ProductsModule,
    WaterTokensModule,
    TransactionCostsModule,
    PaymentAccountsModule,
    DocumentNumbersModule,
    LogsModule,
    FailedJobsModule,
    PasswordResetTokensModule,
    DocumentTypesModule,
    WaterSourcesModule,
    ShortCodesModule,
    MeterTypesModule,
    PaymentTypesModule,
    OtpsModule,
    PaymentChannelsModule,
    PasswordResetsModule,
    NotesModule,
    MigrationsModule,
    B2bTransactionsModule,
    BankPaybillModule,
    C2bTransactionsModule,
    ContractPartyModule,
    ContractModule,
    ContactModule,
    CategoryModule,
    CategoryProductModule,
    PaymentModule,
    IssueTicketModule,
    AppUserModule,
    WaterMeterModule,
    DashboardModule,
    IoTModule,
    RolesModule,
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
