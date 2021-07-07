import sampleTickets from "../static/sampleTickets";

const reducer = (state = sampleTickets, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
    case `ADD_TICKET`:
      return {
        ...state,
        [id]: {
          names,
          location,
          issue,
          id,
        },
      };
    case `DELETE_TICKET`:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;
