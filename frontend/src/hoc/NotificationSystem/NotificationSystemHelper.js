import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NotificationSystemActions from './NotificationSystemActions';

const notificationStyle = {
  Containers: {
    tc: {
      top: '100px',
    },
  },
  NotificationItem: {
    DefaultStyle: {
      position: 'relative',
      width: '100%',
      // height: '4.125rem',
      // overflowY: 'auto'
      borderTopWidth: '4px',
      backgroundColor: '#f5f5f5',
    },
    info: {
      borderTopColor: '#4caf50',
    },
  },
  Title: {
    info: {
      color: '#4caf50'
    },
  },
};

export default function notificationSystemHelper(WrappedComponent) {
  @connect(
    (state) => ({
      notifications: state.notificationSystem.notifications,
    }),
    (dispatch) => ({
      notificationHelperActions: bindActionCreators(NotificationSystemActions, dispatch)
    })
  )
  class NotificationSystemHelperHoc extends Component {
    constructor(props) {
      super(props);
      this._notificationSystem = null;
    }

    componentDidMount() {
      this._notificationSystem = this.notificationSystemRef;
    }

    componentWillReceiveProps(nextProps) {
      const { notifications } = nextProps;
      const notificationIds = notifications.map(notification => notification.uid);
      if (notifications.length > 0) {
        notifications.forEach(notification => {
          this.notificationSystemRef.addNotification({
            ...notification,
            onRemove: () => {
              this.notificationSystemRef.removeNotification(notification.uid);
              this.props.notificationHelperActions.popNotification(notification.uid);
              // return notification.onRemove && notification.onRemove();
            }
          });
        });
      }
    }

    render() {
      return (
        <div>
          <WrappedComponent
            {...this.props}
          />
          <NotificationSystem ref={(ref) => { this.notificationSystemRef = ref; }} style={notificationStyle} />
        </div>
      );
    }
  }

  // NotificationSystemHelperHoc.WrappedComponent.propTypes = {
  //   language: PropTypes.string.isRequired,
  //   intlUniversalActions: PropTypes.shape().isRequired
  // };


  return NotificationSystemHelperHoc;
}
