import React, { Component } from 'react';

import { ContactForm } from './form/form';
import { ContactList } from './contact-list/contact-list';
import { Filter } from './filter/filter';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
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

  addContact = newContact => {
    // console.log(newContact);

    const checkName = this.state.contacts.find(
      contact => newContact.name === contact.name
    );

    const checkNumber = this.state.contacts.find(
      contact => newContact.number === contact.number
    );

    if (checkName) {
      return alert(`${newContact.name} is already in contacts.`);
    } else if (checkNumber) {
      return alert(`${newContact.number} is already in contacts.`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };

  contactFilter = newContact => {
    this.setState({
      filter: newContact,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return (
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ) || contacts
    );
  };

  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.contactFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.onDelete} />
        <GlobalStyle />
      </div>
    );
  }
}
