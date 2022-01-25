import { combineEpics } from 'redux-observable';
import TestImgAndCssEpics from '~~features/TestImgAndCss/TestImgAndCssEpics';
import MeetingBoardEpics from '~~features/MeetingBoard/MeetingBoardEpics';


const rootEpic = combineEpics(
  ...TestImgAndCssEpics,
  ...MeetingBoardEpics
);

export default rootEpic;
