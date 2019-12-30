import React, { Component } from 'react';
import shortid from 'shortid';
// import SignUpForm from './SignUpForm/SignUpForm';
// import FriendList from './FriendList/FriendList';

const filterContactsByQuery = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
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
      // console.log('This name already exists');
    } else {
      this.setState(state => ({
        contacts: [...state.contacts, createContact],
      }));
    }
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, contacts, number, filter } = this.state;
    const onChange = this.handleChange;
    const onSubmit = this.handleSubmit;
    const filtedContacts = filterContactsByQuery(contacts, filter);

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={onSubmit}>
          Name
          <input name="name" value={name} onChange={onChange} type="text" />
          <br />
          Phone
          <input name="number" value={number} onChange={onChange} type="text" />
          <br />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input name="filter" value={filter} onChange={onChange} type="text" />
        <ul>
          {filtedContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
