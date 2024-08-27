import { Migrations as TMigrations } from "../api/migrations/Migrations";

export const MIGRATIONS_TITLE_FIELD = "id";

export const MigrationsTitle = (record: TMigrations): string => {
  return record.id?.toString() || String(record.id);
};
