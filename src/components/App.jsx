import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Appp.styled';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Contact from './Contact/Contact';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contact = localStorage.getItem('contacts');
    const parseContact = JSON.parse(contact);

    if (parseContact) {
      this.setState({ contacts: parseContact });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onChangeSearchInput = e => {
    this.setState(() => ({
      filter: e.target.value,
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = ({ name, number }) => {
    const onList = this.state.contacts.find(contact => contact.name === name);
    if (onList) {
      alert('This contact is already added');
      return;
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [
          {
            id: nanoid(),
            name,
            number,
          },
          ...contacts,
        ],
      };
    });
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook" />
        <ContactForm formSubmitHandler={this.formSubmitHandler} />

        <Section title="Contacts" />
        <Contact
          states={this.state}
          onChangeSearchInput={this.onChangeSearchInput}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
