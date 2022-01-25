import sinon from 'sinon';
import Resource from '~~apis/resource';
import rootEpic from '~~epics';
import middlewares from '~~middlewares';
// https://github.com/gilbarbara/react-redux-observables-boilerplate/blob/9482034351cb83460626952760a30bab5f996477/test/epics/user.spec.js
// import mockStore, { epicMiddleware } from '~~jest/__mocks__/BeforeTestSetUp';

// https://github.com/speedskater/babel-plugin-rewire __RewireAPI__取得沒有export出來的東西
import { simpleAction, anotherSimpleAction, ping, __RewireAPI__ as RewireActionCreator } from '../TestImgAndCssActions';

describe('rootEpic', () => {
  // let store = {};

  // beforeEach(() => {
  //   store = global.mockStore();
  // });

  afterEach(() => {
    // middlewares.epicMiddleware.run(rootEpic);
  });

  it('should ignore otherAction', () => {
    const store = global.mockStore({});
    store.dispatch(ping());
    expect(store.getActions()[0].type).toEqual('OBSERVABLE_PING');
    console.log('store.getActions()', store.getActions().length);
  });
});


// GOOD! https://github.com/TW-Bootcamp/tradeaway-web/blob/1042350054fd138ef00986f8f49c092dcda60a70/test/actions/EmailVeifyActions.test.js
describe('TestImgAndCssActions 會呼叫api的測試', () => {
  let store;
  let userStub;
  // beforeAll(() => {
  //   // mock axios送出前不要檢查token
  //   sinon.stub(client, 'checkTokenExist').returns(true);
  // });

  beforeEach(() => {
    store = global.mockStore({});
  });

  it('call api success', async () => {
    const response = { status: 200, data: 'HAHA' };
    // 第一種：mock axios (最底層連線 intergration test)
    // mockAxios.onPost('/users/register').reply(200, response);
    // 第二種：mock resource
    userStub = sinon.stub(Resource.UserResource, 'create').resolves(response);
    return store.dispatch(anotherSimpleAction())
      .then(() => {
        expect(store.getActions()[0].type).toEqual('ANOTHER_SIMPLE_ACTION');
        userStub.restore();
      });
  });

  // TODO 要想辦法mock axiosApiClient
  it('call api fail', () => {
    const error = { msg: 'error' };
    // 第一種：mock axios (最底層連線 intergration test)
    // mockAxios.onPost('/users/register').reply(400, error);
    // 第二種：mock resource
    userStub = sinon.stub(Resource.UserResource, 'create').rejects(error);
    const expectedActions2 = {
      type: 'ERROR',
      payload: error.msg
    };
    return store.dispatch(anotherSimpleAction())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions2.type);
        userStub.restore();
      });
  });
});


// 參考
// https://github.com/bneiluj/ReactBoilerplate/blob/129fffa842251a2471f0e928ed79f7a624c815ad/test/actions/asyncAction.test.js
// http://mz026.logdown.com/posts/313379-hello-redux-3-3-unit-test
// http://engineering.pivotal.io/post/tdding-react-and-redux/
// https://github.com/unicampi/unicampi-browser/tree/4284c8b8bb383bcc12cb2993e52ec058fa27c991/__tests__/actions
describe('[Action測試]', () => {
  it('應該有一個action 叫做 simpleAction', () => {
    const expectedAction = {
      type: 'A_SIMPLE_ACTION',
      msg: 'KERKERKER'
    };
    expect(simpleAction()).toEqual(expectedAction);
  });

  // 沒有export出來的funciton 怎麼測？
  it('should create an action for call api test success', () => {
    const response = { data: 'HAHA' };
    const expectedAction = {
      type: 'ANOTHER_SIMPLE_ACTION',
      api: response.data,
    };
    expect(RewireActionCreator.__get__('callApiTestSuccess')(response)).toEqual(expectedAction);
  });

  it('should create an action for call api test failure', () => {
    const error = { msg: 'error' };
    const expectedAction = {
      type: 'ERROR',
      payload: error.msg,
    };
    expect(RewireActionCreator.__get__('callApiTestFailed')(error).type).toEqual(expectedAction.type);
  });
});

// https://github.com/bowen31337/react-app-demo/blob/6275bcd54aaf0ee8153ff7ea5ff2cb76fef7ae92/src/actions/fetchContents.spec.js


// 因為是new出來的，要換成我們mock出來的那一個
// https://github.com/waiyaki/docman-react-redux/blob/c599ecc47d8e3c0a1f73c24bd5da81112c588730/test/client/actions/UserDetailsActionsTests.js
// apiClientAPI.__Rewire__('apiClient', client);
