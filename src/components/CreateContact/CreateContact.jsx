import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from '../../tools/uuid/Uuid';

export default class CreateContact extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  inputIDs = {
    nameID: uuidv4(),
    numberID: uuidv4(),
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    const { onAddContact } = this.props;

    onAddContact(contact);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { nameID, numberID } = this.inputIDs;
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={nameID}>
          <h3>Name</h3>
          <input
            name="name"
            value={name}
            onChange={this.handleChange}
            type="text"
            required
          />
        </label>

        <label htmlFor={numberID}>
          <h3>Phone</h3>
          <input
            name="number"
            value={number}
            onChange={this.handleChange}
            type="number"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
