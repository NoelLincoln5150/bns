import { MigrationsWhereInput } from "./MigrationsWhereInput";
import { MigrationsOrderByInput } from "./MigrationsOrderByInput";

export type MigrationsFindManyArgs = {
  where?: MigrationsWhereInput;
  orderBy?: Array<MigrationsOrderByInput>;
  skip?: number;
  take?: number;
};
