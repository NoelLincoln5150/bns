import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FailedJobsWhereInput = {
  connection?: StringNullableFilter;
  exception?: StringNullableFilter;
  failedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  payload?: StringNullableFilter;
  queue?: StringNullableFilter;
  uuid?: StringNullableFilter;
};
