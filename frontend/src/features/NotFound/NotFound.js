import { Component } from 'react';

export default class NotFound extends Component {
  componentDidMount() {
    console.log('[NotFound要近來]');
  }

  componentWillUnmount() {
    console.log('[NotFound要離開]');
  }

  render() {
    console.log('this.props', this.props.location.pathname);
    return '404 NotFound';
  }
}
