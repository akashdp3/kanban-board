import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "./Card";
import IconButton from "./IconButton";

import PlusIcon from "@assets/icons/plus.svg?react";
import MenuIcon from "@assets/icons/menu.svg?react";

const Wrapper = styled.div`
  width: 320px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  .column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;

    .column-title {
      font-size: 14px;
      line-height: 18px;
      font-weight: normal;
    }
  }

  .column-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const Column = (props) => {
  const { label, tickets } = props;

  return (
    <Wrapper>
      <div className="column-header">
        <p className="column-title">{label}</p>
        <div>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <IconButton>
            <PlusIcon />
          </IconButton>
        </div>
      </div>
      <div className="column-content">
        {tickets.map((ticket) => (
          <React.Fragment key={ticket.id}>
            <Card {...ticket} />
          </React.Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

Column.propTypes = {
  label: PropTypes.string.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.shape()),
};
Column.defaultProps = {
  tickets: [],
};
export default Column;
