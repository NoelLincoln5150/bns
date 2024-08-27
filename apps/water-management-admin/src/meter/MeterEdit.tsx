import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CustomerMeterTitle } from "../customerMeter/CustomerMeterTitle";
import { MeterTypesTitle } from "../meterTypes/MeterTypesTitle";
import { UsageTitle } from "../usage/UsageTitle";
import { UserTitle } from "../user/UserTitle";

export const MeterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceArrayInput
          source="customerMeters"
          reference="CustomerMeter"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerMeterTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="installationDate" source="installationDate" />
        <ReferenceInput
          source="meterType.id"
          reference="MeterTypes"
          label="meter_type"
        >
          <SelectInput optionText={MeterTypesTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "ACTIVE", value: "Active" },
            { label: "INACTIVE ", value: "Inactive" },
            { label: "SUSPENDED ", value: "Suspended" },
            { label: "MAINTENANCE ", value: "Maintenance" },
            { label: "FAULTY ", value: "Faulty" },
            { label: "CLOSED", value: "Closed" },
            { label: "PENDING", value: "Pending" },
            { label: "DISCONNECTED ", value: "Disconnected" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="tokenBalance" source="tokenBalance" />
        <ReferenceInput source="usages.id" reference="Usage" label="Usages">
          <SelectInput optionText={UsageTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
