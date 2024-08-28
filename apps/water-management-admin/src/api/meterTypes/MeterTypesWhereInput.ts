import { StringFilter } from "../../util/StringFilter";
import { MeterListRelationFilter } from "../meter/MeterListRelationFilter";

export type MeterTypesWhereInput = {
  id?: StringFilter;
  meters?: MeterListRelationFilter;
};
