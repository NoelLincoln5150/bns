import { NotesWhereUniqueInput } from "./NotesWhereUniqueInput";
import { NotesUpdateInput } from "./NotesUpdateInput";

export type UpdateNotesArgs = {
  where: NotesWhereUniqueInput;
  data: NotesUpdateInput;
};
