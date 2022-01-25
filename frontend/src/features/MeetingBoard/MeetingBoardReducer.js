import { handleActions } from 'redux-actions';
import { actionTypes } from './MeetingBoardActions';


const initialState = {
  data: [],
  boardId: '1qaz233'
};

export default handleActions({
  [actionTypes.MEETINGBOARD_IO___UPDATE_BOARD]: (state, payload) => {
    return {
      ...state,
      data: payload.data,
    };
  },
  [actionTypes.MEETINGBOARD___GET_BOARD_SUCCESS]: (state, payload) => {
    console.log('MEETINGBOARD___GET_BOARD_SUCCESS getBoardgetBoardgetBoardgetBoardgetBoardgetBoard');
    return {
      ...state,
      data: payload.data,
    };
  },
  // [actionTypes.MEETINGBOARD___ADD_FEATURE_CARD]: (state, payload) => {
  //   const { feature, evaluation, cardInfo } = payload;
  //   const newData = state.data.map(item => {
  //     if (item.feature === feature) {
  //       return {
  //         ...item,
  //         [evaluation]: [
  //           ...item[evaluation],
  //           cardInfo
  //         ]
  //       };
  //     }
  //     return item;
  //   });
  //   return {
  //     ...state,
  //     data: newData,
  //   };
  // },
  [actionTypes.MEETINGBOARD___ADD_FEATURE_CARD_SUCCESS]: (state, payload) => {
    return {
      ...state,
      data: payload.data
    };
  },
  [actionTypes.MEETINGBOARD___DELETE_FEATURE_CARD_SUCCESS]: (state, payload) => {
    return {
      ...state,
      data: payload.data
    };
  },
  // [actionTypes.MEETINGBOARD___DELETE_FEATURE_CARD]: (state, payload) => {
  //   const { feature, evaluation, cardId } = payload;
  //   console.log('ffefefefefefeeeee', feature, evaluation, cardId);
  //   const newData = state.data.map(item => {
  //     if (item.feature === feature) {
  //       return {
  //         ...item,
  //         [evaluation]: item[evaluation].filter(d => (d.id !== cardId))
  //       };
  //     }
  //     return item;
  //   });
  //   return {
  //     ...state,
  //     data: newData,
  //   };
  // }
}, initialState);
