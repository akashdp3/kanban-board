import { GROUPS, STATUS_OPTIONS } from "@constants/app.constants";

const getColumns = (tickets, users, key) => {
  if (GROUPS.STATUS === key) {
    return STATUS_OPTIONS;
  }
};

export function groupBy(tickets, users, key) {
  const columns = getColumns(tickets, users, key);

  return columns.map((column) => ({
    label: column,
    tickets: tickets.filter((ticket) => ticket[key] === column),
  }));
}

export function orderBy(tickets, key) {
  console.log({ tickets, key });
}
