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

//import './allContacts.js';


class App extends Component {
  state = { name: '', email: '', allContacts: '' };

  renderContactInputForm = () => {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Input
              placeholder="name"
              name="name"
              value={name}
              onChange={(event, data) => {
                this.setState({ name: data.value });
                console.log(name);
              }}
            />
            <Form.Input
              placeholder="email"
              name="email"
              value={email}
              onChange={(event, data) => {
                this.setState({ email: data.value });
              }}
            />
          </Form.Group>
        </Form>
        <Button
          color="green"
          onClick={() => {
            const newContact = {
              id: Math.random(),
              name: name,
              email: email
            };

            this.setState({
              // allContacts: [newContact, ...this.state.allContacts]
            });
          }}
        >
          <Icon name="checkmark" /> Add This Contact
        </Button>
      </div>
    );
  };

  renderContactList = () => {};

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Container>
          <Header>Rolodex</Header>
          {/* {this.renderContactInputForm()} */}
          <Divider />
          <Header>Contacts</Header>
          {/* {this.renderContactList()} */}
        </Container>
      </div>
    );
  }
}

export default App;
