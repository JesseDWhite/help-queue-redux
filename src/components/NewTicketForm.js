import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTicketForm({ onNewTicketCreation }) {
  function handleNewTicketFormSubmission(e) {
    const { names, location, issue } = e.target;
    e.preventDefault();
    onNewTicketCreation({
      names: names.value,
      location: location.value,
      issue: issue.value,
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
