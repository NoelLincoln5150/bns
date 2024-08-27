import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MigrationsWhereInput = {
  id?: StringFilter;
  migrationName?: StringNullableFilter;
};
