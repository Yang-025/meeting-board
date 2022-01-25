
import * as actions from '../NotificationSystemActions';


describe('測試 NotificationSystemActions', () => {
  describe('[action]pushNotification() ', () => {
    test('level 為info', () => {
      /* **************************** PREPARE **************************** */
      const notification = {
        message: 'abcd',
        level: 'info'
      };
      const store = global.mockStore({});
      /* **************************** PREPARE END **************************** */

      store.dispatch(actions.pushNotification(notification));
      expect(store.getActions()[0].type).toEqual(actions.actionTypes.PUSH_NOTIFICATION);
      // title 為 Info!
      expect(store.getActions()[0].notifications.title).toEqual('Info!');
      expect(store.getActions()[0].notifications.level).toEqual('info');
      // 預設為三秒後消失
      expect(store.getActions()[0].notifications.autoDismiss).toEqual(3);
      // 位置在正中間
      expect(store.getActions()[0].notifications.position).toEqual('tc');
    });

    test('level 為success', () => {
      /* **************************** PREPARE **************************** */
      const notification = {
        message: 'abcd',
        level: 'success'
      };
      const store = global.mockStore({});
      /* **************************** PREPARE END **************************** */

      store.dispatch(actions.pushNotification(notification));
      expect(store.getActions()[0].type).toEqual(actions.actionTypes.PUSH_NOTIFICATION);
      // title 為 Info!
      expect(store.getActions()[0].notifications.title).toEqual('Success!');
      expect(store.getActions()[0].notifications.level).toEqual('success');
      // 預設為三秒後消失
      expect(store.getActions()[0].notifications.autoDismiss).toEqual(3);
      // 位置在正中間
      expect(store.getActions()[0].notifications.position).toEqual('tc');
    });
    test('level 為error', () => {
      /* **************************** PREPARE **************************** */
      const notification = {
        message: 'abcd',
        level: 'error'
      };
      const store = global.mockStore({});
      /* **************************** PREPARE END **************************** */

      store.dispatch(actions.pushNotification(notification));
      expect(store.getActions()[0].type).toEqual(actions.actionTypes.PUSH_NOTIFICATION);
      // title 為 Info!
      expect(store.getActions()[0].notifications.title).toEqual('Error!');
      expect(store.getActions()[0].notifications.level).toEqual('error');
      // 預設為三秒後消失
      expect(store.getActions()[0].notifications.autoDismiss).toEqual(3);
      // 位置在正中間
      expect(store.getActions()[0].notifications.position).toEqual('tc');
    });
    test('level 為warning', () => {
      /* **************************** PREPARE **************************** */
      const notification = {
        message: 'abcd',
        level: 'warning'
      };
      const store = global.mockStore({});
      /* **************************** PREPARE END **************************** */

      store.dispatch(actions.pushNotification(notification));
      expect(store.getActions()[0].type).toEqual(actions.actionTypes.PUSH_NOTIFICATION);
      // title 為 Info!
      expect(store.getActions()[0].notifications.title).toEqual('Warning!');
      expect(store.getActions()[0].notifications.level).toEqual('warning');
      // 預設為三秒後消失
      expect(store.getActions()[0].notifications.autoDismiss).toEqual(3);
      // 位置在正中間
      expect(store.getActions()[0].notifications.position).toEqual('tc');
    });
    test('level 帶info, warning, error, success 以外的值，會預設level為success', () => {
      /* **************************** PREPARE **************************** */
      const notification = {
        message: 'abcd',
        level: 'other'
      };
      const store = global.mockStore({});
      /* **************************** PREPARE END **************************** */

      store.dispatch(actions.pushNotification(notification));
      expect(store.getActions()[0].type).toEqual(actions.actionTypes.PUSH_NOTIFICATION);
      // title 為 Info!
      expect(store.getActions()[0].notifications.title).toEqual('Success!');
      expect(store.getActions()[0].notifications.level).toEqual('success');
      // 預設為三秒後消失
      expect(store.getActions()[0].notifications.autoDismiss).toEqual(3);
      // 位置在正中間
      expect(store.getActions()[0].notifications.position).toEqual('tc');
    });
  });

  describe('[action]popNotification() ', () => {
    test('popNotification 必須帶uid', () => {
      /* **************************** PREPARE **************************** */
      const uid = '12345';
      const store = global.mockStore({});
      /* **************************** PREPARE END **************************** */

      store.dispatch(actions.popNotification(uid));
      expect(store.getActions()[0].type).toEqual(actions.actionTypes.POP_NOTIFICATION);
      expect(store.getActions()[0].uid).toEqual(uid);
    });
  });
});
