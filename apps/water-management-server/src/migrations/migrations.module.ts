import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MigrationsModuleBase } from "./base/migrations.module.base";
import { MigrationsService } from "./migrations.service";
import { MigrationsController } from "./migrations.controller";
import { MigrationsResolver } from "./migrations.resolver";

@Module({
  imports: [MigrationsModuleBase, forwardRef(() => AuthModule)],
  controllers: [MigrationsController],
  providers: [MigrationsService, MigrationsResolver],
  exports: [MigrationsService],
})
export class MigrationsModule {}
