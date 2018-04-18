import 'semantic-ui-css/semantic.min.css';

import _ from 'lodash';
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

export class Contact extends Component {
  render() {
    const { contacts } = this.props;
    const { contactName, contactEmail } = contacts;
    console.log(contactName, contactEmail);

    return (
      <List.Item>
        {contactName} ~ {contactEmail}
      </List.Item>
    );
  }
}
