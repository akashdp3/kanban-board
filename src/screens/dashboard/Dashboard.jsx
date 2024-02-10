import React from "react";
import styled from "styled-components";

import DashboardLayout from "@layouts/Dashboard.layout";
import Spinner from "@components/Spinner";
import { GROUPS, ORDERS } from "@constants/app.constants";
import { getTasks } from "@services/api.service";

import DashboardView from "./Dashboard.view";

const SpinnerWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DEFAULT_FILTER = { groupedBy: GROUPS.STATUS, orderedBy: ORDERS.PRIORITY };

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      filters: DEFAULT_FILTER,
    };
  }

  componentDidMount() {
    getTasks().then((res) => {
      this.setState({ ...res, isLoading: false });
    });
  }

  updateFilters = (filters) => {
    this.setState({ filters });
  };

  render() {
    const { isLoading, filters, tickets, users } = this.state;

    if (isLoading) {
      return (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      );
    }

    return (
      <DashboardLayout filters={filters} onUpdateFilter={this.updateFilters}>
        <DashboardView tickets={tickets} users={users} filters={filters} />
      </DashboardLayout>
    );
  }
}

export default Dashboard;
