import React from 'react';
import PropTypes from 'prop-types';

const Contactlist = ({ onDelete, filtedContacts }) => (
  <ul>
    {filtedContacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button type="button" onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

Contactlist.propTypes = {
  onDelete: PropTypes.func.isRequired,
  filtedContacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Contactlist;
