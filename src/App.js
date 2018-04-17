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
  state = { contactName: '', contactEmail: '', allContacts: '' };

  renderContactInputForm = () => {
    const { contactName, contactEmail } = this.state;
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Input
              placeholder="name"
              //name="contactName"
              value={contactName}
              onChange={(event, data) => {
                this.setState({ contactName: data.value });
                console.log(contactName);
              }}
            />
            <Form.Input
              placeholder="email"
              //name="email"
              value={contactEmail}
              onChange={(event, data) => {
                this.setState({ contactEmail: data.value });
              }}
            />
          </Form.Group>
        </Form>
      </div>
    );
  };

  renderContactList = () => {
    const { contactName, contactEmail } = this.state;
    return (
      <List divided relaxed>
        <List.Item>
          <List.Header>{contactName}</List.Header>
          <List.Description>{contactEmail}</List.Description>
        </List.Item>
      </List>
    );
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Container>
          <Divider hidden />
          <Header>Rolodex</Header>
          {this.renderContactInputForm()}
          <Divider hidden />
          <Divider />
          <Header>Contacts</Header>
          {this.renderContactList()}
        </Container>
      </div>
    );
  }
}

export default App;
