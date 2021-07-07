import React from "react";
import { connect } from 'react-redux';
import { objectOf, shape } from 'prop-types';
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";
import EditTicketForm from "./EditTicketForm";
import { ITicket } from "../propTypes";

const VIEWS = {
  MASTER_LIST: `masterList`,
  READ_TICKET: `readTicket`,
  EDIT_TICKET: `editTicket`,
  NEW_TICKET: `newTicket`,
};

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: VIEWS.MASTER_LIST,
      // formVisibleOnPage: false,
      // editing: false,
      selectedTicket: null,
    };
  }

  onNewTicketCreation = newTicket => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = newTicket;
    const action = {
      type: `ADD_TICKET`,
      id,
      names,
      location,
      issue,
    };
    dispatch(action);
    this.viewTicketList();
  }

  handleDeletingTicket = id => {
    const { dispatch } = this.props;
    const action = {
      type: `DELETE_TICKET`,
      id,
    };
    dispatch(action);
    this.setState({ selectedTicket: null });
  }

  handleEditingTicketInList = ticketToEdit => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = ticketToEdit;
    const action = {
      type: `ADD_TICKET`,
      id,
      names,
      location,
      issue,
    };
    dispatch(action);
    this.setState({ selectedTicket: null });
  }

  changeView = (newView, selectedTicket = null) => this.setState({
    currentView: newView,
    selectedTicket,
  });

  viewTicketList = () => this.changeView(VIEWS.MASTER_LIST)

  viewNewTicketForm = () => this.changeView(VIEWS.NEW_TICKET)

  viewEditTicketForm = id => {
    const selectedTicket = this.props.masterTicketList[id];
    this.changeView(VIEWS.EDIT_TICKET, selectedTicket);
  }

  viewTicket = id => {
    const selectedTicket = this.props.masterTicketList[id];
    this.changeView(VIEWS.READ_TICKET, selectedTicket);
  }

  onClickingEdit = () => {
    console.log(`you got to the edit section`);
    this.setState({
      currentView: VIEWS.EDIT_TICKET,
    });
  }

  render() {
    console.log(this.props.masterTicketList);

    switch (this.state.currentView) {
      case VIEWS.MASTER_LIST:
        return (
          <TicketList
            ticketList={this.props.masterTicketList}
            viewTicket={this.viewTicket}
            viewNewTicketForm={this.viewNewTicketForm}
          />
        );
      case VIEWS.READ_TICKET:
        return (
          <TicketDetail
            ticket={this.state.selectedTicket}
            onClickingDelete={this.handleDeletingTicket}
            viewEditTicketForm={this.viewEditTicketForm}
            viewTicketList={this.viewTicketList}
          />
        );
      case VIEWS.EDIT_TICKET:
        return (
          <EditTicketForm
            ticket={this.state.selectedTicket}
            onEditTicket={this.handleEditingTicketInList}
            viewTicketList={this.viewTicketList}
          />
        );
      case VIEWS.NEW_TICKET:
        return (
          <NewTicketForm
            onNewTicketCreation={this.onNewTicketCreation}
          />
        );
      default: throw new Error(`Invalid view!`);
    }
    /* eslint-disable max-len */
    // if (this.state.editing) {
    //   currentlyVisibleState = <EditTicketForm ticket={this.state.selectedTicket} onEditTicket={this.handleEditingTicketInList} />
    //   buttonText = "Return to Ticket List";
    // }
    // else if (this.state.selectedTicket) {
    //   currentlyVisibleState = <TicketDetail ticket={this.state.selectedTicket} onClickingDelete={this.handleDeletingTicket} onClickingEdit={this.state.handleEditClick} />
    //   buttonText = "Return to Ticket List"
    // }
    // else if (this.state.formVisibleOnPage) {
    //   currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
    //   buttonText = "Return to Ticket List"
    // } else {
    //   currentlyVisibleState = <TicketList ticketList={this.props.masterTicketList} handleClickTicket={this.handleClickTicket} />;
    //   buttonText = "Add Ticket"
    // }
    // return (
    //   <React.Fragment>
    //     {currentlyVisibleState}
    //     <button onClick={this.handleClick}>{buttonText}</button>
    //   </React.Fragment>
    // )
    /* eslint-enable max-len */
  }
}

TicketControl.propTypes = {
  masterTicketList: objectOf(shape(ITicket)),
};

const mapStateToProps = state => ({
  masterTicketList: state,
});

export default connect(mapStateToProps)(TicketControl);
