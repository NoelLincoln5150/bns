import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CustomersTitle } from "../customers/CustomersTitle";
import { MeterTitle } from "../meter/MeterTitle";

export const CustomerMeterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customers"
          label="customer_id"
        >
          <SelectInput optionText={CustomersTitle} />
        </ReferenceInput>
        <ReferenceInput source="meterId.id" reference="Meter" label="meter_id">
          <SelectInput optionText={MeterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
