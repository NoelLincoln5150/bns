import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UsageList } from "./usage/UsageList";
import { UsageCreate } from "./usage/UsageCreate";
import { UsageEdit } from "./usage/UsageEdit";
import { UsageShow } from "./usage/UsageShow";
import { MeterList } from "./meter/MeterList";
import { MeterCreate } from "./meter/MeterCreate";
import { MeterEdit } from "./meter/MeterEdit";
import { MeterShow } from "./meter/MeterShow";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PrepaidMeterList } from "./prepaidMeter/PrepaidMeterList";
import { PrepaidMeterCreate } from "./prepaidMeter/PrepaidMeterCreate";
import { PrepaidMeterEdit } from "./prepaidMeter/PrepaidMeterEdit";
import { PrepaidMeterShow } from "./prepaidMeter/PrepaidMeterShow";
import { CommandList } from "./command/CommandList";
import { CommandCreate } from "./command/CommandCreate";
import { CommandEdit } from "./command/CommandEdit";
import { CommandShow } from "./command/CommandShow";
import { MeterDataList } from "./meterData/MeterDataList";
import { MeterDataCreate } from "./meterData/MeterDataCreate";
import { MeterDataEdit } from "./meterData/MeterDataEdit";
import { MeterDataShow } from "./meterData/MeterDataShow";
import { AlertList } from "./alert/AlertList";
import { AlertCreate } from "./alert/AlertCreate";
import { AlertEdit } from "./alert/AlertEdit";
import { AlertShow } from "./alert/AlertShow";
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
          name="Usage"
          list={UsageList}
          edit={UsageEdit}
          create={UsageCreate}
          show={UsageShow}
        />
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
          name="PrepaidMeter"
          list={PrepaidMeterList}
          edit={PrepaidMeterEdit}
          create={PrepaidMeterCreate}
          show={PrepaidMeterShow}
        />
        <Resource
          name="Command"
          list={CommandList}
          edit={CommandEdit}
          create={CommandCreate}
          show={CommandShow}
        />
        <Resource
          name="MeterData"
          list={MeterDataList}
          edit={MeterDataEdit}
          create={MeterDataCreate}
          show={MeterDataShow}
        />
        <Resource
          name="Alert"
          list={AlertList}
          edit={AlertEdit}
          create={AlertCreate}
          show={AlertShow}
        />
      </Admin>
    </div>
  );
};

export default App;
