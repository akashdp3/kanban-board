import React from "react";
import styled from "styled-components";

import Spinner from "@components/Spinner";
import { getTasks } from "@services/api.service";

import DashboardView from "./Dashboard.view";

const SpinnerWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    getTasks().then((res) => {
      console.log({ res });
      this.setState({ ...res, isLoading: false });
    });
  }

  render() {
    const { isLoading, tickets, users } = this.state;
    console.log({ tickets, users });

    if (isLoading) {
      return (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      );
    }

    return (
      <div>
        <DashboardView tickets={tickets} users={users} />
      </div>
    );
  }
}

export default Dashboard;
