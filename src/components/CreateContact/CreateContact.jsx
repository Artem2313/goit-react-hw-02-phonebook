import React from 'react';
import PropTypes from 'prop-types';

const CreateContact = ({
  name,
  nameID,
  numberID,
  number,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={nameID}>
        <h3>Name</h3>
        <input
          name="name"
          value={name}
          onChange={onChange}
          type="text"
          required
        />
      </label>

      <label htmlFor={numberID}>
        <h3>Phone</h3>
        <input
          name="number"
          value={number}
          onChange={onChange}
          type="number"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

CreateContact.propTypes = {
  name: PropTypes.string.isRequired,
  nameID: PropTypes.string.isRequired,
  numberID: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CreateContact;
