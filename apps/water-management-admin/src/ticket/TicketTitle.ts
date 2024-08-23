import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "subject";

export const TicketTitle = (record: TTicket): string => {
  return record.subject?.toString() || String(record.id);
};
