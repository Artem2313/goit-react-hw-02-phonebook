import React, { Component } from 'react';
import shortid from 'shortid';
import CreateContact from './CreateContact/CreateContact';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import styles from './StyledDiv/styles.module.css';

const filterContactsByQuery = (contacts, filter) => {
  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter),
  );
};

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  inputIDs = {
    nameID: shortid.generate(),
    numberID: shortid.generate(),
    filterID: shortid.generate(),
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number, contacts } = this.state;
    e.preventDefault();
    const createContact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (contacts.find(contact => contact.name === name)) {
      alert('This name already exists');
    } else {
      this.setState(state => ({
        contacts: [...state.contacts, createContact],
      }));
    }
    this.resetForm();
  };

  handleDelete = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, contacts, number, filter } = this.state;
    const { nameID, numberID, filterID } = this.inputIDs;
    const onChange = this.handleChange;
    const onSubmit = this.handleSubmit;
    const onDelete = this.handleDelete;

    const filtedContacts = filterContactsByQuery(contacts, filter);

    return (
      <div styles={styles}>
        <h1>Phonebook</h1>
        <CreateContact
          name={name}
          nameID={nameID}
          number={number}
          numberID={numberID}
          onChange={onChange}
          onSubmit={onSubmit}
        />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          onChange={this.handleChange}
          filterID={filterID}
        />
        <ContactList onDelete={onDelete} filtedContacts={filtedContacts} />
      </div>
    );
  }
}

export default App;
