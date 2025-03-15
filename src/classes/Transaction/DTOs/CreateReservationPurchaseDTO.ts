import { type TicketDTO } from "./TicketDTO";

export default interface CreateReservationPurchaseDTO {
    eventId: number;
    reservationId: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    zipCode: string;
    allergiesSpecialRequerements: string;
    transactionId: string;
    totalAmount: number;
    tickets: TicketDTO[];
    couponId?: number;
    countryId?: number;
}
