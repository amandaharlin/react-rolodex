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

import { Contact } from '../contact';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    console.log('contact list', this.props);
    return (
      <List divided relaxed>
        {Contact}
      </List>
    );
  }
}
