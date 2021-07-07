import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTicketForm({ onNewTicketCreation }) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4(),
    });
  }

  NewTicketForm.propTypes = {
    onNewTicketCreation: PropTypes.func,
  };

  return (
    <ReusableForm
      formSubmissionHandler={handleNewTicketFormSubmission}
      buttonText='Help!'
    />
  );
}

export default NewTicketForm;
