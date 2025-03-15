import { type CreateReservationSesionDTO } from "./DTOs/CreateReservationSessionDTO";

export class Ticket {
    ticketId: number;
    ticketName: string
    quantity: number
    eventName: string
    eventId: number
    price: number

    constructor (ticket?: Ticket,
        ticketId: number = 0,
        ticketName: string = '',
        quantity: number = 0,
        eventName: string = '',
        eventId: number = 0,
        price: number = 0,
    ){
        if(ticket){
            this.eventName = ticket.eventName
            this.quantity= ticket.quantity
            this.ticketName= ticket.ticketName
            this.ticketId= ticket.ticketId
            this.eventId= ticket.eventId
            this.price= ticket.price
        }else{
            this.eventName = eventName
            this.quantity= quantity
            this.ticketName= ticketName
            this.ticketId= ticketId
            this.eventId= eventId
            this.price= price
        }
    }

    public static async getAllAvailableTicketsToChoose() {
        const response = await fetch(
            import.meta.env.PUBLIC_API +
            "ticketsType.php" ,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",

                },
            }
        );
        const data: Ticket[] = await response.json() 
        return data;
    }
    public static async reserveTickets(dto: CreateReservationSesionDTO) {
        const response = await fetch(
            import.meta.env.PUBLIC_API +
            "reservations.php" ,
            {
                method: "POST",
                body: JSON.stringify(dto),
                headers: {
                    "Content-Type": "application/json",

                },
            }
        );
        const data: {reservationId: number} = await response.json()
        return data.reservationId;
    }
    public static async getPaymentIntent(amount:number, name:String, email:String) {
        const response = await fetch( import.meta.env.PUBLIC_API  +`checkout/create-sesion.php/?amount=${amount}&email=${email}&name=${name}`);

        if (!response.ok) {
          throw new Error(`Error al obtener el cliente y el PaymentIntent: ${response.statusText}`);
        }
  
        const { paymentIntent } = await response.json();

        return paymentIntent as string
  
    }
}