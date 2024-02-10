import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Column from "./Column";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;

  width: auto;
  height: auto;
  overflow-x: auto;

  @media only screen and (max-width: 810px) {
    flex-direction: column;
    align-items: center;
  }
`;

const KanbanBoard = (props) => {
  const { columns } = props;

  return (
    <Wrapper>
      {columns.map((column) => (
        <React.Fragment key={column.label}>
          <Column {...column} />
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

KanbanBoard.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      tickets: PropTypes.arrayOf(PropTypes.shape()),
    }),
  ).isRequired,
};
export default KanbanBoard;
