import { IssueTicket as TIssueTicket } from "../api/issueTicket/IssueTicket";

export const ISSUETICKET_TITLE_FIELD = "id";

export const IssueTicketTitle = (record: TIssueTicket): string => {
  return record.id?.toString() || String(record.id);
};
