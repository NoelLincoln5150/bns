import { Users as TUsers } from "../api/users/Users";

export const USERS_TITLE_FIELD = "id";

export const UsersTitle = (record: TUsers): string => {
  return record.id?.toString() || String(record.id);
};
