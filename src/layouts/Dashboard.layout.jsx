import React from "react";
import styled from "styled-components";

import Navbar from "@components/Navbar";

const Wrapper = styled.div`
  background-color: #f4f5f8;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const DashboardLayout = ({ children, ...others }) => {
  return (
    <Wrapper>
      <Navbar {...others} />
      {children}
    </Wrapper>
  );
};

DashboardLayout.propTypes = {
  children: React.children,
};
export default DashboardLayout;
