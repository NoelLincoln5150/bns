import { Migrations as TMigrations } from "../api/migrations/Migrations";

export const MIGRATIONS_TITLE_FIELD = "migrationName";

export const MigrationsTitle = (record: TMigrations): string => {
  return record.migrationName?.toString() || String(record.id);
};
