import _ from "lodash";
import {
  GROUPS,
  ORDERS,
  STATUS_OPTIONS,
  PRIORITY_OPTIONS,
  PRIORITY_MAP,
} from "@constants/app.constants";

const getColumns = (tickets, users, key) => {
  if (GROUPS.STATUS === key) {
    return STATUS_OPTIONS;
  }

  if (GROUPS.PRIORITY === key) {
    return PRIORITY_OPTIONS;
  }

  if (GROUPS.USER === key) {
    return users.map((user) => user.id);
  }
};

const getTickets = (tickets, key, column) => {
  if (GROUPS.STATUS === key) {
    return tickets.filter((ticket) => ticket.status === column);
  }

  if (GROUPS.PRIORITY === key) {
    return tickets.filter((ticket) => PRIORITY_MAP[ticket.priority] === column);
  }

  if (GROUPS.USER === key) {
    return tickets.filter((ticket) => ticket.userId === column);
  }
};

export function groupBy(tickets, users, key) {
  const columns = getColumns(tickets, users, key);

  return columns.map((column) => ({
    label:
      key === GROUPS.USER
        ? users.find((user) => user.id === column).name
        : column,
    tickets: getTickets(tickets, key, column),
  }));
}

const orderByTitle = (a, b) => a.title > b.title;

const orderByPriority = (a, b) => a.priority < b.priority;

export function orderBy(columns, key) {
  console.log({ columns, key });
  return columns.map((column) => ({
    ...column,
    tickets: _.orderBy(
      column.tickets,
      [key],
      key === GROUPS.PRIORITY ? "desc" : "asc",
    ),
  }));
}
