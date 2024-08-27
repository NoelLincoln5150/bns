import { NotesWhereInput } from "./NotesWhereInput";
import { NotesOrderByInput } from "./NotesOrderByInput";

export type NotesFindManyArgs = {
  where?: NotesWhereInput;
  orderBy?: Array<NotesOrderByInput>;
  skip?: number;
  take?: number;
};
