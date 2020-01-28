import React, { Component } from 'react';
import CreateContact from './CreateContact/CreateContact';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import filterContactsByQuery from '../tools/FilterContactsByQuery/FilterContactsByQuery';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContact = newContact => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert('This name already exists');
    } else {
      this.setState(state => ({
        contacts: [...state.contacts, newContact],
      }));
    }
  };

  handleDelete = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const onDelete = this.handleDelete;

    const filtedContacts = filterContactsByQuery(contacts, filter);

    return (
      <div>
        <h1>Phonebook</h1>
        <CreateContact onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChange} />
        <ContactList onDelete={onDelete} filtedContacts={filtedContacts} />
      </div>
    );
  }
}

export default App;
