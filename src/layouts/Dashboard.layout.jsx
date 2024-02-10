import React from "react";
import styled from "styled-components";

import Navbar from "@components/Navbar";

const Wrapper = styled.div`
  background-color: #f4f5f8;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    padding: 32px 24px;
  }
`;

const DashboardLayout = ({ children, ...others }) => {
  return (
    <Wrapper>
      <Navbar {...others} />
      <div className="content">{children}</div>
    </Wrapper>
  );
};

DashboardLayout.propTypes = {
  children: React.children,
};
export default DashboardLayout;
