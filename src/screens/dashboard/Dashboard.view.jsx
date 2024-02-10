import { useMemo } from "react";
import PropTypes from "prop-types";

import KanbanBoard from "@components/KanbanBoard";
import { groupBy, orderBy } from "@utils/app.utils";

const DashboardView = (props) => {
  const { tickets, users, filters } = props;

  const columns = useMemo(() => {
    return groupBy(tickets, users, filters.groupedBy);
  }, [filters, tickets, users]);

  return (
    <>
      <KanbanBoard columns={columns} />
    </>
  );
};

DashboardView.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
export default DashboardView;
