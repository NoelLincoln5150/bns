import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MeterList } from "./meter/MeterList";
import { MeterCreate } from "./meter/MeterCreate";
import { MeterEdit } from "./meter/MeterEdit";
import { MeterShow } from "./meter/MeterShow";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { UsageList } from "./usage/UsageList";
import { UsageCreate } from "./usage/UsageCreate";
import { UsageEdit } from "./usage/UsageEdit";
import { UsageShow } from "./usage/UsageShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MeterDataList } from "./meterData/MeterDataList";
import { MeterDataCreate } from "./meterData/MeterDataCreate";
import { MeterDataEdit } from "./meterData/MeterDataEdit";
import { MeterDataShow } from "./meterData/MeterDataShow";
import { CommandList } from "./command/CommandList";
import { CommandCreate } from "./command/CommandCreate";
import { CommandEdit } from "./command/CommandEdit";
import { CommandShow } from "./command/CommandShow";
import { AlertList } from "./alert/AlertList";
import { AlertCreate } from "./alert/AlertCreate";
import { AlertEdit } from "./alert/AlertEdit";
import { AlertShow } from "./alert/AlertShow";
import { PrepaidMeterList } from "./prepaidMeter/PrepaidMeterList";
import { PrepaidMeterCreate } from "./prepaidMeter/PrepaidMeterCreate";
import { PrepaidMeterEdit } from "./prepaidMeter/PrepaidMeterEdit";
import { PrepaidMeterShow } from "./prepaidMeter/PrepaidMeterShow";
import { CustomerMeterList } from "./customerMeter/CustomerMeterList";
import { CustomerMeterCreate } from "./customerMeter/CustomerMeterCreate";
import { CustomerMeterEdit } from "./customerMeter/CustomerMeterEdit";
import { CustomerMeterShow } from "./customerMeter/CustomerMeterShow";
import { DocumentsList } from "./documents/DocumentsList";
import { DocumentsCreate } from "./documents/DocumentsCreate";
import { DocumentsEdit } from "./documents/DocumentsEdit";
import { DocumentsShow } from "./documents/DocumentsShow";
import { CustomersList } from "./customers/CustomersList";
import { CustomersCreate } from "./customers/CustomersCreate";
import { CustomersEdit } from "./customers/CustomersEdit";
import { CustomersShow } from "./customers/CustomersShow";
import { PremisesList } from "./premises/PremisesList";
import { PremisesCreate } from "./premises/PremisesCreate";
import { PremisesEdit } from "./premises/PremisesEdit";
import { PremisesShow } from "./premises/PremisesShow";
import { StocksList } from "./stocks/StocksList";
import { StocksCreate } from "./stocks/StocksCreate";
import { StocksEdit } from "./stocks/StocksEdit";
import { StocksShow } from "./stocks/StocksShow";
import { PersonalAccessTokensList } from "./personalAccessTokens/PersonalAccessTokensList";
import { PersonalAccessTokensCreate } from "./personalAccessTokens/PersonalAccessTokensCreate";
import { PersonalAccessTokensEdit } from "./personalAccessTokens/PersonalAccessTokensEdit";
import { PersonalAccessTokensShow } from "./personalAccessTokens/PersonalAccessTokensShow";
import { SuppliersList } from "./suppliers/SuppliersList";
import { SuppliersCreate } from "./suppliers/SuppliersCreate";
import { SuppliersEdit } from "./suppliers/SuppliersEdit";
import { SuppliersShow } from "./suppliers/SuppliersShow";
import { TaxablesList } from "./taxables/TaxablesList";
import { TaxablesCreate } from "./taxables/TaxablesCreate";
import { TaxablesEdit } from "./taxables/TaxablesEdit";
import { TaxablesShow } from "./taxables/TaxablesShow";
import { PremisesWaterSourceList } from "./premisesWaterSource/PremisesWaterSourceList";
import { PremisesWaterSourceCreate } from "./premisesWaterSource/PremisesWaterSourceCreate";
import { PremisesWaterSourceEdit } from "./premisesWaterSource/PremisesWaterSourceEdit";
import { PremisesWaterSourceShow } from "./premisesWaterSource/PremisesWaterSourceShow";
import { DocumentNumbersList } from "./documentNumbers/DocumentNumbersList";
import { DocumentNumbersCreate } from "./documentNumbers/DocumentNumbersCreate";
import { DocumentNumbersEdit } from "./documentNumbers/DocumentNumbersEdit";
import { DocumentNumbersShow } from "./documentNumbers/DocumentNumbersShow";
import { DocumentTypesList } from "./documentTypes/DocumentTypesList";
import { DocumentTypesCreate } from "./documentTypes/DocumentTypesCreate";
import { DocumentTypesEdit } from "./documentTypes/DocumentTypesEdit";
import { DocumentTypesShow } from "./documentTypes/DocumentTypesShow";
import { MetersList } from "./meters/MetersList";
import { MetersCreate } from "./meters/MetersCreate";
import { MetersEdit } from "./meters/MetersEdit";
import { MetersShow } from "./meters/MetersShow";
import { DocumentPaymentsList } from "./documentPayments/DocumentPaymentsList";
import { DocumentPaymentsCreate } from "./documentPayments/DocumentPaymentsCreate";
import { DocumentPaymentsEdit } from "./documentPayments/DocumentPaymentsEdit";
import { DocumentPaymentsShow } from "./documentPayments/DocumentPaymentsShow";
import { LogsList } from "./logs/LogsList";
import { LogsCreate } from "./logs/LogsCreate";
import { LogsEdit } from "./logs/LogsEdit";
import { LogsShow } from "./logs/LogsShow";
import { RevenueSharesList } from "./revenueShares/RevenueSharesList";
import { RevenueSharesCreate } from "./revenueShares/RevenueSharesCreate";
import { RevenueSharesEdit } from "./revenueShares/RevenueSharesEdit";
import { RevenueSharesShow } from "./revenueShares/RevenueSharesShow";
import { ProductsList } from "./products/ProductsList";
import { ProductsCreate } from "./products/ProductsCreate";
import { ProductsEdit } from "./products/ProductsEdit";
import { ProductsShow } from "./products/ProductsShow";
import { FailedJobsList } from "./failedJobs/FailedJobsList";
import { FailedJobsCreate } from "./failedJobs/FailedJobsCreate";
import { FailedJobsEdit } from "./failedJobs/FailedJobsEdit";
import { FailedJobsShow } from "./failedJobs/FailedJobsShow";
import { ProductListStockList } from "./productListStock/ProductListStockList";
import { ProductListStockCreate } from "./productListStock/ProductListStockCreate";
import { ProductListStockEdit } from "./productListStock/ProductListStockEdit";
import { ProductListStockShow } from "./productListStock/ProductListStockShow";
import { TaxesList } from "./taxes/TaxesList";
import { TaxesCreate } from "./taxes/TaxesCreate";
import { TaxesEdit } from "./taxes/TaxesEdit";
import { TaxesShow } from "./taxes/TaxesShow";
import { WaterTokensList } from "./waterTokens/WaterTokensList";
import { WaterTokensCreate } from "./waterTokens/WaterTokensCreate";
import { WaterTokensEdit } from "./waterTokens/WaterTokensEdit";
import { WaterTokensShow } from "./waterTokens/WaterTokensShow";
import { ProductListsList } from "./productLists/ProductListsList";
import { ProductListsCreate } from "./productLists/ProductListsCreate";
import { ProductListsEdit } from "./productLists/ProductListsEdit";
import { ProductListsShow } from "./productLists/ProductListsShow";
import { MeterTypesList } from "./meterTypes/MeterTypesList";
import { MeterTypesCreate } from "./meterTypes/MeterTypesCreate";
import { MeterTypesEdit } from "./meterTypes/MeterTypesEdit";
import { MeterTypesShow } from "./meterTypes/MeterTypesShow";
import { ShortCodesList } from "./shortCodes/ShortCodesList";
import { ShortCodesCreate } from "./shortCodes/ShortCodesCreate";
import { ShortCodesEdit } from "./shortCodes/ShortCodesEdit";
import { ShortCodesShow } from "./shortCodes/ShortCodesShow";
import { TransactionCostsList } from "./transactionCosts/TransactionCostsList";
import { TransactionCostsCreate } from "./transactionCosts/TransactionCostsCreate";
import { TransactionCostsEdit } from "./transactionCosts/TransactionCostsEdit";
import { TransactionCostsShow } from "./transactionCosts/TransactionCostsShow";
import { PaymentAccountsList } from "./paymentAccounts/PaymentAccountsList";
import { PaymentAccountsCreate } from "./paymentAccounts/PaymentAccountsCreate";
import { PaymentAccountsEdit } from "./paymentAccounts/PaymentAccountsEdit";
import { PaymentAccountsShow } from "./paymentAccounts/PaymentAccountsShow";
import { PasswordResetTokensList } from "./passwordResetTokens/PasswordResetTokensList";
import { PasswordResetTokensCreate } from "./passwordResetTokens/PasswordResetTokensCreate";
import { PasswordResetTokensEdit } from "./passwordResetTokens/PasswordResetTokensEdit";
import { PasswordResetTokensShow } from "./passwordResetTokens/PasswordResetTokensShow";
import { WaterSourcesList } from "./waterSources/WaterSourcesList";
import { WaterSourcesCreate } from "./waterSources/WaterSourcesCreate";
import { WaterSourcesEdit } from "./waterSources/WaterSourcesEdit";
import { WaterSourcesShow } from "./waterSources/WaterSourcesShow";
import { OtpsList } from "./otps/OtpsList";
import { OtpsCreate } from "./otps/OtpsCreate";
import { OtpsEdit } from "./otps/OtpsEdit";
import { OtpsShow } from "./otps/OtpsShow";
import { PasswordResetsList } from "./passwordResets/PasswordResetsList";
import { PasswordResetsCreate } from "./passwordResets/PasswordResetsCreate";
import { PasswordResetsEdit } from "./passwordResets/PasswordResetsEdit";
import { PasswordResetsShow } from "./passwordResets/PasswordResetsShow";
import { PaymentTypesList } from "./paymentTypes/PaymentTypesList";
import { PaymentTypesCreate } from "./paymentTypes/PaymentTypesCreate";
import { PaymentTypesEdit } from "./paymentTypes/PaymentTypesEdit";
import { PaymentTypesShow } from "./paymentTypes/PaymentTypesShow";
import { MigrationsList } from "./migrations/MigrationsList";
import { MigrationsCreate } from "./migrations/MigrationsCreate";
import { MigrationsEdit } from "./migrations/MigrationsEdit";
import { MigrationsShow } from "./migrations/MigrationsShow";
import { PaymentChannelsList } from "./paymentChannels/PaymentChannelsList";
import { PaymentChannelsCreate } from "./paymentChannels/PaymentChannelsCreate";
import { PaymentChannelsEdit } from "./paymentChannels/PaymentChannelsEdit";
import { PaymentChannelsShow } from "./paymentChannels/PaymentChannelsShow";
import { NotesList } from "./notes/NotesList";
import { NotesCreate } from "./notes/NotesCreate";
import { NotesEdit } from "./notes/NotesEdit";
import { NotesShow } from "./notes/NotesShow";
import { UsersList } from "./users/UsersList";
import { UsersCreate } from "./users/UsersCreate";
import { UsersEdit } from "./users/UsersEdit";
import { UsersShow } from "./users/UsersShow";
import { B2bTransactionsList } from "./b2bTransactions/B2bTransactionsList";
import { B2bTransactionsCreate } from "./b2bTransactions/B2bTransactionsCreate";
import { B2bTransactionsEdit } from "./b2bTransactions/B2bTransactionsEdit";
import { B2bTransactionsShow } from "./b2bTransactions/B2bTransactionsShow";
import { BankPaybillList } from "./bankPaybill/BankPaybillList";
import { BankPaybillCreate } from "./bankPaybill/BankPaybillCreate";
import { BankPaybillEdit } from "./bankPaybill/BankPaybillEdit";
import { BankPaybillShow } from "./bankPaybill/BankPaybillShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WaterManagement"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Meter"
          list={MeterList}
          edit={MeterEdit}
          create={MeterCreate}
          show={MeterShow}
        />
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
        <Resource
          name="Usage"
          list={UsageList}
          edit={UsageEdit}
          create={UsageCreate}
          show={UsageShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="MeterData"
          list={MeterDataList}
          edit={MeterDataEdit}
          create={MeterDataCreate}
          show={MeterDataShow}
        />
        <Resource
          name="Command"
          list={CommandList}
          edit={CommandEdit}
          create={CommandCreate}
          show={CommandShow}
        />
        <Resource
          name="Alert"
          list={AlertList}
          edit={AlertEdit}
          create={AlertCreate}
          show={AlertShow}
        />
        <Resource
          name="PrepaidMeter"
          list={PrepaidMeterList}
          edit={PrepaidMeterEdit}
          create={PrepaidMeterCreate}
          show={PrepaidMeterShow}
        />
        <Resource
          name="CustomerMeter"
          list={CustomerMeterList}
          edit={CustomerMeterEdit}
          create={CustomerMeterCreate}
          show={CustomerMeterShow}
        />
        <Resource
          name="Documents"
          list={DocumentsList}
          edit={DocumentsEdit}
          create={DocumentsCreate}
          show={DocumentsShow}
        />
        <Resource
          name="Customers"
          list={CustomersList}
          edit={CustomersEdit}
          create={CustomersCreate}
          show={CustomersShow}
        />
        <Resource
          name="Premises"
          list={PremisesList}
          edit={PremisesEdit}
          create={PremisesCreate}
          show={PremisesShow}
        />
        <Resource
          name="Stocks"
          list={StocksList}
          edit={StocksEdit}
          create={StocksCreate}
          show={StocksShow}
        />
        <Resource
          name="PersonalAccessTokens"
          list={PersonalAccessTokensList}
          edit={PersonalAccessTokensEdit}
          create={PersonalAccessTokensCreate}
          show={PersonalAccessTokensShow}
        />
        <Resource
          name="Suppliers"
          list={SuppliersList}
          edit={SuppliersEdit}
          create={SuppliersCreate}
          show={SuppliersShow}
        />
        <Resource
          name="Taxables"
          list={TaxablesList}
          edit={TaxablesEdit}
          create={TaxablesCreate}
          show={TaxablesShow}
        />
        <Resource
          name="PremisesWaterSource"
          list={PremisesWaterSourceList}
          edit={PremisesWaterSourceEdit}
          create={PremisesWaterSourceCreate}
          show={PremisesWaterSourceShow}
        />
        <Resource
          name="DocumentNumbers"
          list={DocumentNumbersList}
          edit={DocumentNumbersEdit}
          create={DocumentNumbersCreate}
          show={DocumentNumbersShow}
        />
        <Resource
          name="DocumentTypes"
          list={DocumentTypesList}
          edit={DocumentTypesEdit}
          create={DocumentTypesCreate}
          show={DocumentTypesShow}
        />
        <Resource
          name="Meters"
          list={MetersList}
          edit={MetersEdit}
          create={MetersCreate}
          show={MetersShow}
        />
        <Resource
          name="DocumentPayments"
          list={DocumentPaymentsList}
          edit={DocumentPaymentsEdit}
          create={DocumentPaymentsCreate}
          show={DocumentPaymentsShow}
        />
        <Resource
          name="Logs"
          list={LogsList}
          edit={LogsEdit}
          create={LogsCreate}
          show={LogsShow}
        />
        <Resource
          name="RevenueShares"
          list={RevenueSharesList}
          edit={RevenueSharesEdit}
          create={RevenueSharesCreate}
          show={RevenueSharesShow}
        />
        <Resource
          name="Products"
          list={ProductsList}
          edit={ProductsEdit}
          create={ProductsCreate}
          show={ProductsShow}
        />
        <Resource
          name="FailedJobs"
          list={FailedJobsList}
          edit={FailedJobsEdit}
          create={FailedJobsCreate}
          show={FailedJobsShow}
        />
        <Resource
          name="ProductListStock"
          list={ProductListStockList}
          edit={ProductListStockEdit}
          create={ProductListStockCreate}
          show={ProductListStockShow}
        />
        <Resource
          name="Taxes"
          list={TaxesList}
          edit={TaxesEdit}
          create={TaxesCreate}
          show={TaxesShow}
        />
        <Resource
          name="WaterTokens"
          list={WaterTokensList}
          edit={WaterTokensEdit}
          create={WaterTokensCreate}
          show={WaterTokensShow}
        />
        <Resource
          name="ProductLists"
          list={ProductListsList}
          edit={ProductListsEdit}
          create={ProductListsCreate}
          show={ProductListsShow}
        />
        <Resource
          name="MeterTypes"
          list={MeterTypesList}
          edit={MeterTypesEdit}
          create={MeterTypesCreate}
          show={MeterTypesShow}
        />
        <Resource
          name="ShortCodes"
          list={ShortCodesList}
          edit={ShortCodesEdit}
          create={ShortCodesCreate}
          show={ShortCodesShow}
        />
        <Resource
          name="TransactionCosts"
          list={TransactionCostsList}
          edit={TransactionCostsEdit}
          create={TransactionCostsCreate}
          show={TransactionCostsShow}
        />
        <Resource
          name="PaymentAccounts"
          list={PaymentAccountsList}
          edit={PaymentAccountsEdit}
          create={PaymentAccountsCreate}
          show={PaymentAccountsShow}
        />
        <Resource
          name="PasswordResetTokens"
          list={PasswordResetTokensList}
          edit={PasswordResetTokensEdit}
          create={PasswordResetTokensCreate}
          show={PasswordResetTokensShow}
        />
        <Resource
          name="WaterSources"
          list={WaterSourcesList}
          edit={WaterSourcesEdit}
          create={WaterSourcesCreate}
          show={WaterSourcesShow}
        />
        <Resource
          name="Otps"
          list={OtpsList}
          edit={OtpsEdit}
          create={OtpsCreate}
          show={OtpsShow}
        />
        <Resource
          name="PasswordResets"
          list={PasswordResetsList}
          edit={PasswordResetsEdit}
          create={PasswordResetsCreate}
          show={PasswordResetsShow}
        />
        <Resource
          name="PaymentTypes"
          list={PaymentTypesList}
          edit={PaymentTypesEdit}
          create={PaymentTypesCreate}
          show={PaymentTypesShow}
        />
        <Resource
          name="Migrations"
          list={MigrationsList}
          edit={MigrationsEdit}
          create={MigrationsCreate}
          show={MigrationsShow}
        />
        <Resource
          name="PaymentChannels"
          list={PaymentChannelsList}
          edit={PaymentChannelsEdit}
          create={PaymentChannelsCreate}
          show={PaymentChannelsShow}
        />
        <Resource
          name="Notes"
          list={NotesList}
          edit={NotesEdit}
          create={NotesCreate}
          show={NotesShow}
        />
        <Resource
          name="Users"
          list={UsersList}
          edit={UsersEdit}
          create={UsersCreate}
          show={UsersShow}
        />
        <Resource
          name="B2bTransactions"
          list={B2bTransactionsList}
          edit={B2bTransactionsEdit}
          create={B2bTransactionsCreate}
          show={B2bTransactionsShow}
        />
        <Resource
          name="BankPaybill"
          list={BankPaybillList}
          edit={BankPaybillEdit}
          create={BankPaybillCreate}
          show={BankPaybillShow}
        />
      </Admin>
    </div>
  );
};

export default App;
