export interface CreateReservationSesionDTO {
  eventId: number;
  tickets: {
    ticketId: number;
    quantity: number;
  }[];
}
