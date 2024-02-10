import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Tag from "@components/Tag";
import IconTag from "@components/IconTag";

import NoPriorityIcon from "@assets/icons/no-priority.svg?react";
import LowPriorityIcon from "@assets/icons/low-priority.svg?react";
import MediumPriorityIcon from "@assets/icons/medium-priority.svg?react";
import HighPriorityIcon from "@assets/icons/high-priority.svg?react";
import UrgentPriorityIcon from "@assets/icons/urgent-priority.svg?react";

const ICON_MAPPINGS = {
  0: <NoPriorityIcon />,
  1: <LowPriorityIcon />,
  2: <MediumPriorityIcon />,
  3: <HighPriorityIcon />,
  4: <UrgentPriorityIcon />,
};

const Wrapper = styled.div`
  padding: 12px 16px;

  border: 1px solid rgb(223, 225, 228);
  border-radius: 6px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .ticket-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .ticket-id {
      text-transform: uppercase;
      color: #999;

      font-size: 10px;
      line-height: 14px;
      font-weight: 500;
    }
  }

  .ticket-title {
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    color: #1a1a1a;
  }

  .ticket-tags {
    display: flex;
    gap: 6px;
  }
`;

const Card = (props) => {
  const { id, title, priority, tag } = props;

  return (
    <Wrapper>
      <div className="ticket-info">
        <span className="ticket-id">{id}</span>
      </div>
      <p className="ticket-title">{title}</p>
      <div className="ticket-tags">
        <IconTag>{ICON_MAPPINGS[priority]}</IconTag>
        {tag?.map((tag) => (
          <React.Fragment key={tag}>
            <Tag label={tag} />
          </React.Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired,
  tag: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape(),
};

Card.defaultProps = {
  user: {},
};

export default Card;
