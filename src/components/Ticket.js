import React from "react";
import { ITicket } from "../propTypes";

function Ticket({ viewTicket, location, names, issue, id }) {
  return (

    <div>
      <h3>{location} - {names}</h3>
      <p><em>{issue}</em></p>
      <button type='button' onClick={() => viewTicket(id)}>
        View Ticket
      </button>
      <hr />
    </div>

  );
}

Ticket.propTypes = ITicket;

export default Ticket;
