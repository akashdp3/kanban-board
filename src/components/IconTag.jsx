import PropTypes from "prop-types";
import styled from "styled-components";

const IconTagElement = styled.span`
  padding: 0 8px;

  border: 1px solid #ddd;
  border-radius: 4px;
  color: #999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconTag = (props) => {
  const { children } = props;

  return <IconTagElement>{children}</IconTagElement>;
};

IconTag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IconTag;
