import { Injectable } from "@nestjs/common";
import { DashboardData } from "./DashboardData";

@Injectable()
export class DashboardService {
  constructor() {}
  async GetDashboardData(args: string): Promise<DashboardData> {
    throw new Error("Not implemented");
  }
}
