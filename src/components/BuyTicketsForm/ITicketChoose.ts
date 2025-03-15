import { Ticket } from "../../classes/Ticket/Ticket";

export interface TicketChoose {
    ticketType: Ticket;
    name: string;
    email: string;
    age: number;
  }