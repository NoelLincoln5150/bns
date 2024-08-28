import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PremisesWaterSourceListRelationFilter } from "../premisesWaterSource/PremisesWaterSourceListRelationFilter";

export type WaterSourcesWhereInput = {
  county?: StringNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  elevation?: FloatNullableFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  localAddress?: StringNullableFilter;
  longitude?: FloatNullableFilter;
  name?: StringNullableFilter;
  numberField?: IntNullableFilter;
  premisesWaterSources?: PremisesWaterSourceListRelationFilter;
  region?: StringNullableFilter;
  subCounty?: StringNullableFilter;
  supplierNumber?: StringNullableFilter;
  town?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
