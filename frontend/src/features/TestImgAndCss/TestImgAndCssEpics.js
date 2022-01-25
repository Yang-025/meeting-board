// test dispatch
// import 'rxjs';
import { ofType } from 'redux-observable';
import { mapTo, delay } from 'rxjs/operators';
import { pong, actionTypes } from './TestImgAndCssActions';


export const pingEpic = action$ => {
  return action$.pipe(
    ofType(actionTypes.OBSERVABLE_PING),
    delay(3000),
    mapTo(pong())
  );
};

export default [
  pingEpic
];
