import uuid from 'uuid';

export const actionTypes = {
  PUSH_NOTIFICATION: 'PUSH_NOTIFICATION',
  POP_NOTIFICATION: 'POP_NOTIFICATION',
};


/*
  message: string // [必填] 要顯示的文字
  autoDismiss: number,  // [option] n秒後消失，0表示永不消失
  level: string // [必填] 有4種 info | warning | error | success,
*/
export function pushNotification(notification) {
  let notifications;
  // 預設position為tc，表示顯示在頁面中間
  switch (notification.level) {
    case 'info':
      notifications = {
        title: 'Info!',
        position: 'tc',
        autoDismiss: 3,
        uid: uuid.v4(),
        ...notification,
      };
      break;
    case 'success':
      notifications = {
        title: 'Success!',
        position: 'tc',
        autoDismiss: 3,
        uid: uuid.v4(),
        ...notification,
      };
      break;
    case 'error':
      notifications = {
        title: 'Error!',
        position: 'tc',
        autoDismiss: 3,
        uid: uuid.v4(),
        ...notification,
      };
      break;
    case 'warning':
      notifications = {
        title: 'Warning!',
        position: 'tc',
        autoDismiss: 3,
        uid: uuid.v4(),
        ...notification,
      };
      break;
    default:
      notifications = {
        ...notification,
        level: 'success',
        title: 'Success!',
        position: 'tc',
        autoDismiss: 3,
        uid: uuid.v4(),
      };
      break;
  }
  return {
    type: actionTypes.PUSH_NOTIFICATION,
    notifications,
  };
}

export function popNotification(uid) {
  // console.log('uid POP', uid);
  return {
    type: actionTypes.POP_NOTIFICATION,
    uid,
  };
}

