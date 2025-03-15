import { type TicketChoose } from "./ITicketChoose";
import i18next from 'i18next';

const FormStep2 = ({ selectedTickets, handleTicketDetailChange, handleRestrictionsChange}: any) => (
    <form id="ticket-details-form">
      <h2 data-aos="fade-up">{i18next.t("tickets.tickets.details")}</h2>
      {selectedTickets.map((ticket: TicketChoose, index: number) => (
        <div key={`${ticket.ticketType.ticketId}-${index}`} className="mb-5">
          <h3>{ticket.ticketType.ticketName.toLowerCase().includes("child".toLowerCase()) ? `Child` : 'Guest'} - {ticket.ticketType.ticketName}</h3>
          <input
            type="text"
            className="form-control mb-4"
            name="name"
            value={ticket.name}
            onChange={(e) => handleTicketDetailChange(e, index)}
            placeholder={i18next.t('tickets.general-step.1.form.name') || ''}
            required
          />
          <label htmlFor="age" className="form-label ms-2">{i18next.t('tickets.general-step.1.form.age') || ''}</label>
          <input
            type="number"
            className="form-control mb-4"
            name="age"
            min="0"
            max={ticket.ticketType.ticketName.toLowerCase().includes('child')? 12 : undefined}
            value={ticket.age || ''}
            onChange={(e) => handleTicketDetailChange(e, index)}
            placeholder={i18next.t('tickets.general-step.1.form.age') || ''}
          />
          {ticket.ticketType.ticketName.toLowerCase().includes('child') ? null : <input
            type="email"
            className="form-control mb-4"
            name="email"
            value={ticket.email}
            onChange={(e) => handleTicketDetailChange(e, index)}
            placeholder={i18next.t('tickets.general-step.1.form.email') || ''}
          />}
  
        </div>
      ))}
      <textarea
        onChange={(e)=> handleRestrictionsChange(e.target.value)}
        className="form-control mb-6"
        name="restrictions"
        placeholder={i18next.t('tickets.general-step.1.form.restrictions') || ''}
      />
    </form>
  );
  


  export default FormStep2;