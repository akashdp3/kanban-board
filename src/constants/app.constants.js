export const GROUPS = {
  STATUS: "status",
  USER: "user",
  PRIORITY: "priority",
};

export const ORDERS = {
  PRIORITY: "priority",
  TITLE: "title",
};

export const GROUPING_OPTIONS = [
  { value: GROUPS.STATUS, label: "Status" },
  { value: GROUPS.USER, label: "User" },
  { value: GROUPS.PRIORITY, label: "Priority" },
];

export const ORDERING_OPTIONS = [
  { value: ORDERS.PRIORITY, label: "Priority" },
  { value: ORDERS.TITLE, label: "Title" },
];

export const STATUSES = {
  BACKLOG: "Backlog",
  TODO: "Todo",
  IN_PROGRESS: "In progress",
  DONE: "Done",
  CANCELLED: "Cancelled",
};

export const STATUS_OPTIONS = [
  STATUSES.BACKLOG,
  STATUSES.TODO,
  STATUSES.IN_PROGRESS,
  STATUSES.DONE,
  STATUSES.CANCELLED,
];

export const PRIORITIES = {
  URGENT: "Urgent",
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
  NO_PRIORITY: "No priority",
};

export const PRIORITY_MAP = {
  0: PRIORITIES.NO_PRIORITY,
  1: PRIORITIES.LOW,
  2: PRIORITIES.MEDIUM,
  3: PRIORITIES.HIGH,
  4: PRIORITIES.URGENT,
};

export const PRIORITY_OPTIONS = [
  PRIORITIES.URGENT,
  PRIORITIES.HIGH,
  PRIORITIES.MEDIUM,
  PRIORITIES.LOW,
  PRIORITIES.NO_PRIORITY,
];
