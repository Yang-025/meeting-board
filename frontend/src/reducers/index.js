import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import simple from '../features/TestImgAndCss/TestImgAndCssReducer';
import simple from '~~features/TestImgAndCss/TestImgAndCssReducer';
import auth from '~~features/Auth/AuthReducer';
import meetingBoard from '~~features/MeetingBoard/MeetingBoardReducer';
import intl from '~~hoc/intlUniversal/intlUniversalReducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state,
  simple,
  auth,
  intl,
  form: formReducer,
  meetingBoard
});

export default rootReducer;
