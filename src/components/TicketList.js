import React from "react";
import { shape, func, objectOf } from 'prop-types';
import { ITicket } from "../propTypes";
import Ticket from "./Ticket";

function TicketList({ ticketList, viewTicket, viewNewTicketForm }) {
  console.log(`viewTicket`, viewTicket);
  return (
    <>
      <hr />
      {Object.values(ticketList).map(ticket =>
        <Ticket
          viewTicket={viewTicket}
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          id={ticket.id}
          key={ticket.id}
        />
      )}
      <button type='button' onClick={viewNewTicketForm}>
        Create New Ticket
      </button>
    </>
  );
}

TicketList.propTypes = {
  ticketList: objectOf(shape(ITicket)).isRequired,
  viewTicket: func.isRequired,
  viewNewTicketForm: func.isRequired,
};

export default TicketList;
