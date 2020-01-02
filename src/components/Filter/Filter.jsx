import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange, filterID }) => {
  return (
    <div>
      <label htmlFor={filterID}>
        <h2>Find contacts by name</h2>
        <input
          name="filter"
          value={filter}
          id={filterID}
          onChange={onChange}
          type="text"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filterID: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
