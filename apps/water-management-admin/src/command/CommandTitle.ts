import { Command as TCommand } from "../api/command/Command";

export const COMMAND_TITLE_FIELD = "parameter";

export const CommandTitle = (record: TCommand): string => {
  return record.parameter?.toString() || String(record.id);
};
