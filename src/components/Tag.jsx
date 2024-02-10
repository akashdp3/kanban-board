import PropTypes from "prop-types";
import styled from "styled-components";

const TagElement = styled.span`
  font-size: 10px;
  line-height: 14px;
  font-weight: 400;
  padding: 4px 8px;

  border: 1px solid #ddd;
  border-radius: 4px;
  color: #999;
`;

const Tag = (props) => {
  const { label } = props;

  return <TagElement>{label}</TagElement>;
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tag;
