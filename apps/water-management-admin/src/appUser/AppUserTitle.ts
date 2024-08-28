import { AppUser as TAppUser } from "../api/appUser/AppUser";

export const APPUSER_TITLE_FIELD = "name";

export const AppUserTitle = (record: TAppUser): string => {
  return record.name?.toString() || String(record.id);
};
