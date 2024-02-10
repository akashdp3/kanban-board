import styled from "styled-components";
import PropTypes from "prop-types";

import { ORDERING_OPTIONS, GROUPING_OPTIONS } from "@constants/app.constants";

const Wrapper = styled.div`
  background-color: #fff;
  padding: 0 24px;
  min-height: 56px;
  height: 56px;
  width: 100%;
  border-bottom: 1px solid rgb(236, 239, 242);

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;

  .select-label {
    font-size: 14px;
    line-height: 18px;
  }
  .select-group-input {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 8px;
  }
`;

const Navbar = (props) => {
  const { filters, onUpdateFilter } = props;

  const handleChange = (event) => {
    onUpdateFilter({ ...filters, [event.target.name]: event.target.value });
  };

  return (
    <Wrapper>
      <div>
        <label className="select-label">Grouping: </label>
        <select
          className="select-group-input"
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
      </div>
      <div>
        <label className="select-label">Ordering: </label>
        <select
          className="select-group-input"
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
      </div>
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
