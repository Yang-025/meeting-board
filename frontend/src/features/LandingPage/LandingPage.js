import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import intl from 'react-intl-universal';

import AppConfig from '~~config';
import MeetingBoard from '../MeetingBoard';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <MeetingBoard />
      </div>
    );
  }
}
