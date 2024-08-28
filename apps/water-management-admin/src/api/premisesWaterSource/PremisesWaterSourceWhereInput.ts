import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WaterSourcesWhereUniqueInput } from "../waterSources/WaterSourcesWhereUniqueInput";

export type PremisesWaterSourceWhereInput = {
  id?: StringFilter;
  premisesId?: StringNullableFilter;
  waterSourceId?: WaterSourcesWhereUniqueInput;
};
