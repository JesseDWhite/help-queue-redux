import React from "react";
import { shape, func } from 'prop-types';
import { ITicket } from "../propTypes";

function TicketDetail({
  ticket,
  onClickingDelete,
  viewEditTicketForm,
  viewTicketList,
}) {
  console.log(viewEditTicketForm);
  return (
    <>
      <h1>Ticket Detail</h1>
      <h3>{ticket.locations} = {ticket.name}</h3>
      <p><em>{ticket.issue}</em></p>
      <button type='button' onClick={() => viewEditTicketForm(ticket.id)}>
        Edit Ticket
      </button>
      <button type='button' onClick={() => onClickingDelete(ticket.id)}>
        Close Ticket
      </button>
      <hr />
      <button type='button' onClick={viewTicketList}>
        Return to Ticket List
      </button>
    </>
  );
}

TicketDetail.propTypes = {

  ticket: shape(ITicket).isRequired,
  onClickingDelete: func.isRequired,
  viewEditTicketForm: func.isRequired,
  viewTicketList: func.isRequired,
};

export default TicketDetail;
