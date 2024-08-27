import { Notes as TNotes } from "../api/notes/Notes";

export const NOTES_TITLE_FIELD = "id";

export const NotesTitle = (record: TNotes): string => {
  return record.id?.toString() || String(record.id);
};
