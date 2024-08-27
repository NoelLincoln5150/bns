import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PremisesWhereInput = {
  contractNumber?: StringNullableFilter;
  county?: StringNullableFilter;
  elevation?: StringNullableFilter;
  id?: StringFilter;
  latitude?: StringNullableFilter;
  location?: StringNullableFilter;
  longitude?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  region?: StringNullableFilter;
  subCounty?: StringNullableFilter;
  supplierNumber?: StringNullableFilter;
  town?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
