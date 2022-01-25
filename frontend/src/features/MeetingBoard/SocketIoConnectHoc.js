import React, { Component } from 'react';
import io from 'socket.io-client';

import AppConfig from '~~config';

let socket;

export default function socketIoHelper(WrappedComponent) {
  class SocketIoHelper extends Component {
    componentDidMount() {
      socket = io(AppConfig.socketDomain);
      socket.on('connect', () => {
        const { id } = socket;
        // 跟server說話
        socket.emit('client:onConnect', { socketId: id });

        // 需要更新board的信號
        socket.on('board:update', (res) => {
          this.props.updateBoard(res.data);
        });
      });
    }

    componentWillUnmount() {
      socket.disconnect();
      // alert("Disconnecting Socket as component will unmount")
    }
    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      );
    }
  }
  return SocketIoHelper;
}
