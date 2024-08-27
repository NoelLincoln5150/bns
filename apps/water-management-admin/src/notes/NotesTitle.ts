import { Notes as TNotes } from "../api/notes/Notes";

export const NOTES_TITLE_FIELD = "title";

export const NotesTitle = (record: TNotes): string => {
  return record.title?.toString() || String(record.id);
};
