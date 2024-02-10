import styled from "styled-components";
import PropTypes from "prop-types";

import { ORDERING_OPTIONS, GROUPING_OPTIONS } from "@constants/app.constants";

const Wrapper = styled.div`
  background-color: #fff;
  padding: 0 24px;
  height: 56px;
  width: 100%;
  border-bottom: 1px solid rgb(236, 239, 242);

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Navbar = (props) => {
  const { filters, onUpdateFilter } = props;

  const handleChange = (event) => {
    onUpdateFilter({ ...filters, [event.target.name]: event.target.value });
  };

  return (
    <Wrapper>
      <select
        name="groupedBy"
        value={filters.groupedBy}
        onChange={handleChange}
      >
        {GROUPING_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select
        name="orderedBy"
        value={filters.orderedBy}
        onChange={handleChange}
      >
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
    groupedBy: PropTypes.string,
    orderedBy: PropTypes.string,
  }).isRequired,
  onUpdateFilter: PropTypes.func.isRequired,
};
export default Navbar;
