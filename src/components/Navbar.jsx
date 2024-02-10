import styled from "styled-components";
import PropTypes from "prop-types";

import { ORDERING_OPTIONS, GROUPING_OPTIONS } from "@constants/app.constants";

const Wrapper = styled.div`
  background-color: #fff;
  padding: 16px 24px;
  width: 100%;
`;

const Navbar = (props) => {
  const { filters, onUpdateFilter } = props;

  const handleChange = (event) => {
    onUpdateFilter({ ...filters, [event.target.name]: event.target.value });
  };

  return (
    <Wrapper>
      <select name="group_by" value={filters.group_by} onChange={handleChange}>
        {GROUPING_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select name="order_by" value={filters.order_by} onChange={handleChange}>
        {ORDERING_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

Navbar.propTypes = {
  filters: PropTypes.shape({
    group_by: PropTypes.string,
    order_by: PropTypes.string,
  }).isRequired,
  onUpdateFilter: PropTypes.func.isRequired,
};
export default Navbar;
