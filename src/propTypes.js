import { string, func } from "prop-types";

export const ITicket = {
  names: string.isRequired,
  location: string.isRequired,
  issue: string.isRequired,
  id: string.isRequired,
  handleClickTicket: func,
};
