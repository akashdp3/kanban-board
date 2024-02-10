import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonElement = styled.button`
  padding: 4px 8px;

  background-color: transparent;
  border: none;
  border-radius: 4px;
`;

const IconButton = (props) => {
  const { children } = props;

  return <ButtonElement>{children}</ButtonElement>;
};

IconButton.propTypes = {
  children: PropTypes.node.isRequried,
};

export default IconButton;
