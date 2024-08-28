import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const TicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "PENDING", value: "Pending" },
            { label: "IN_PROGRESS", value: "InProgress" },
            { label: "RESOLVED", value: "Resolved" },
            { label: "CLOSED", value: "Closed" },
            { label: "ESCALATED", value: "Escalated" },
            { label: "ON_HOLD", value: "OnHold" },
            { label: "CANCELLED", value: "Cancelled" },
            { label: "SCHEDULED", value: "Scheduled" },
            { label: "AWAITING_PARTS", value: "AwaitingParts" },
            { label: "UNDER_REVIEW", value: "UnderReview" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="subject" source="subject" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="userRelation" source="userRelation" />
      </SimpleForm>
    </Create>
  );
};
