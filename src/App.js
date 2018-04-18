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

class App extends Component {
  state = {
    allContacts: [],
    contactName: '',
    contactEmail: ''
  };

  renderContactInputForm = () => {
    const { contactName, contactEmail } = this.state;
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Input
              placeholder="name"
              name="contactName"
              value={contactName}
              onChange={(event, data) => {
                this.setState({ contactName: data.value });
              }}
            />
            <Form.Input
              placeholder="email"
              name="email"
              value={contactEmail}
              onChange={(event, data) => {
                this.setState({ contactEmail: data.value });
              }}
            />
          </Form.Group>
        </Form>
        <Button
          color="teal"
          onClick={() => {
            const newContact = {
              id: Math.random(),
              name: contactName, //name
              email: contactEmail
            };

            this.setState({
              allContacts: [newContact, ...this.state.allContacts],
              contactName: '',
              contactEmail: ''
            });
          }}
        >
          <Icon name="plus circle" /> Add New Contact
        </Button>
      </div>
    );
  };

  render() {
    const { allContacts } = this.state;

    return (
      <div className="App">
        <Container>
          <Divider hidden />
          <Header>Rolodex</Header>
          {this.renderContactInputForm()}
          <Divider hidden />
          <Divider />
          <Header>Contacts</Header>
          <List>
            {allContacts.map((contact, i) => {
              return (
                <List.Item key={contact.id}>
                  <List.Icon name="mail" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header>{contact.name}</List.Header>
                    <List.Description>{contact.email}</List.Description>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </Container>
      </div>
    );
  }
}

export default App;
