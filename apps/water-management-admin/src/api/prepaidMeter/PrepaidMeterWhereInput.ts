import { AlertListRelationFilter } from "../alert/AlertListRelationFilter";
import { CommandListRelationFilter } from "../command/CommandListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeterDataListRelationFilter } from "../meterData/MeterDataListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PrepaidMeterWhereInput = {
  alerts?: AlertListRelationFilter;
  commands?: CommandListRelationFilter;
  id?: StringFilter;
  meterDataItems?: MeterDataListRelationFilter;
  meterNumber?: StringNullableFilter;
  status?: "Option1";
};
