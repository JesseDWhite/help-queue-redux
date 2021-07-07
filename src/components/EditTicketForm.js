import React from "react";
import { shape, func } from "prop-types";
import { ITicket } from "../propTypes";
// import ReusableForm from "./ReusableForm";

function EditTicketForm({ ticket, viewTicketList, onEditTicket }) {
  const { names, location, issue, id } = ticket;

  function handleEditFormSubmission(e) {
    e.preventDefault();
    const { names, location, issue } = e.target;
    onEditTicket({
      names: names.value,
      location: location.value,
      issue: issue.value,
      id,
    });
  }
  return (
    <>
      <form onSubmit={handleEditFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names'
          defaultValue={names}
        />
        <input
          type='text'
          name='location'
          placeholder='Location'
          defaultValue={location}
        />
        <textarea
          name='issue'
          placeholder='Describe your issue.'
          defaultValue={issue}
        />
        <button type='submit'>Update Ticket</button>
      </form>
      <button type='button' onClick={viewTicketList}>
        Return to Ticket List
      </button>
    </>
  );
}

EditTicketForm.propTypes = {
  ticket: shape(ITicket).isRequired,
  onEditTicket: func.isRequired,
  viewTicketList: func.isRequired,
};

export default EditTicketForm;
