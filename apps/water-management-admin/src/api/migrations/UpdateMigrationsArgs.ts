import { MigrationsWhereUniqueInput } from "./MigrationsWhereUniqueInput";
import { MigrationsUpdateInput } from "./MigrationsUpdateInput";

export type UpdateMigrationsArgs = {
  where: MigrationsWhereUniqueInput;
  data: MigrationsUpdateInput;
};
