import 'semantic-ui-css/semantic.min.css';

import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Form,
  Header,
  Icon,
  List
} from 'semantic-ui-react';

export default class App extends Component {
  state = {
    allContacts: [],
    contactName: '',
    contactEmail: ''
  };

  addNewContact = () => {
    const { contactName, contactEmail, allContacts } = this.state;
    this.setState({
      allContacts: [
        ...allContacts,
        {
          id: Math.random(),
          name: contactName,
          email: contactEmail
        }
      ],
      contactName: '',
      contactEmail: ''
    });
  };

  removeItemFromList = selectedContect => {
    const { allContacts } = this.state;
    this.setState({
      allContacts: allContacts.filter(c => c.id !== selectedContect.id)
    });
  };

  updateContactName = (event, data) => {
    this.setState({ contactName: data.value });
  };

  updateContactEmail = (event, data) => {
    this.setState({ contactEmail: data.value });
  };

  renderContactInputForm = () => {
    const { contactName, contactEmail } = this.state;
    return (
      <Form>
        <Form.Group>
          <Form.Input
            placeholder="name"
            name="contactName"
            value={contactName}
            onChange={this.updateContactName}
          />
          <Form.Input
            placeholder="email"
            name="email"
            value={contactEmail}
            onChange={this.updateContactEmail}
          />
        </Form.Group>
        <Button color="teal" onClick={this.addNewContact}>
          <Icon name="plus circle" /> Add New Contact
        </Button>
      </Form>
    );
  };

  renderContactList = () => {
    const contactToHtml = (contact, i) => {
      return (
        <List.Item
          key={contact.id}
          onClick={() => {
            this.removeItemFromList(contact);
          }}
        >
          <List.Icon name="mail" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header>{contact.name}</List.Header>
            <List.Description>{contact.email}</List.Description>
          </List.Content>
        </List.Item>
      );
    };

    return <List selection>{this.state.allContacts.map(contactToHtml)}</List>;
  };

  render() {
    return (
      <Container>
        <Header>Rolodex</Header>
        {this.renderContactInputForm()}
        <Divider />
        <Header>Contacts</Header>
        {this.renderContactList()}
      </Container>
    );
  }
}
