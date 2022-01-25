import uuid from 'uuid';

export const actionTypes = {
  MEETINGBOARD___ADD_FEATURE_CARD: 'MEETINGBOARD___ADD_FEATURE_CARD',
  MEETINGBOARD___ADD_FEATURE_CARD_SUCCESS: 'MEETINGBOARD___ADD_FEATURE_CARD_SUCCESS',
  MEETINGBOARD___ADD_FEATURE_CARD_FAILED: 'MEETINGBOARD___ADD_FEATURE_CARD_FAILED',
  MEETINGBOARD___DELETE_FEATURE_CARD: 'MEETINGBOARD___DELETE_FEATURE_CARD',
  MEETINGBOARD___DELETE_FEATURE_CARD_SUCCESS: 'MEETINGBOARD___DELETE_FEATURE_CARD_SUCCESS',
  MEETINGBOARD___DELETE_FEATURE_CARD_FAILED: 'MEETINGBOARD___DELETE_FEATURE_CARD_FAILED',
  MEETINGBOARD___GET_BOARD: 'MEETINGBOARD___GET_BOARD',
  MEETINGBOARD___GET_BOARD_SUCCESS: 'MEETINGBOARD___GET_BOARD_SUCCESS',
  MEETINGBOARD___GET_BOARD_FAILED: 'MEETINGBOARD___GET_BOARD_FAILED',
  MEETINGBOARD___CREATE_FEATURE: 'MEETINGBOARD___CREATE_FEATURE',
  MEETINGBOARD___CREATE_FEATURE_SUCCESS: 'MEETINGBOARD___CREATE_FEATURE_SUCCESS',
  MEETINGBOARD___CREATE_FEATURE_FAILED: 'MEETINGBOARD___CREATE_FEATURE_FAILED',

  MEETINGBOARD___UPDATE_FEATURE: 'MEETINGBOARD___UPDATE_FEATURE',
  MEETINGBOARD___UPDATE_FEATURE_SUCCESS: 'MEETINGBOARD___UPDATE_FEATURE_SUCCESS',
  MEETINGBOARD___UPDATE_FEATURE_FAILED: 'MEETINGBOARD___UPDATE_FEATURE_FAILED',

  MEETINGBOARD___DELETE_FEATURE: 'MEETINGBOARD___DELETE_FEATURE',
  MEETINGBOARD___DELETE_FEATURE_SUCCESS: 'MEETINGBOARD___DELETE_FEATURE_SUCCESS',
  MEETINGBOARD___DELETE_FEATURE_FAILED: 'MEETINGBOARD___DELETE_FEATURE_FAILED',

  MEETINGBOARD_IO___UPDATE_BOARD: 'MEETINGBOARD_IO___UPDATE_BOARD',
};

export function updateBoard(data) {
  return {
    type: actionTypes.MEETINGBOARD_IO___UPDATE_BOARD,
    data
  };
}

export function getBoard(boardId) {
  console.log('getBoardgetBoardgetBoardgetBoardgetBoardgetBoard');
  return {
    type: actionTypes.MEETINGBOARD___GET_BOARD,
    boardId
  };
}

export function getBoardSuccess(response) {
  console.log('[getBoardSuccess]response', response);
  return {
    type: actionTypes.MEETINGBOARD___GET_BOARD_SUCCESS,
    data: response.data
  };
}

export function getBoardFailed(response) {
  console.log('[getBoardFailed]response', response);
  return {
    type: actionTypes.MEETINGBOARD___GET_BOARD_FAILED,
  };
}


export function addFeatureCard({ feature, evaluation, cardText }) {
  return {
    type: actionTypes.MEETINGBOARD___ADD_FEATURE_CARD,
    feature,
    evaluation,
    cardInfo: {
      content: cardText,
      id: uuid.v4()
    }
  };
}

export function addFeatureCardSuccess(response) {
  return {
    type: actionTypes.MEETINGBOARD___ADD_FEATURE_CARD_SUCCESS,
    data: response.data
  };
}

export function addFeatureCardFailed(response) {
  return {
    type: actionTypes.MEETINGBOARD___ADD_FEATURE_CARD_FAILED,
    data: response.data
  };
}

export function deleteFeatureCard({ feature, evaluation, cardId }) {
  console.log('121231231231233', feature, evaluation, cardId);
  return {
    type: actionTypes.MEETINGBOARD___DELETE_FEATURE_CARD,
    feature,
    evaluation,
    cardId
  };
}

export function deleteFeatureCardSuccess(response) {
  return {
    type: actionTypes.MEETINGBOARD___DELETE_FEATURE_CARD_SUCCESS,
    data: response.data
  };
}

export function deleteFeatureCardFailed(response) {
  return {
    type: actionTypes.MEETINGBOARD___DELETE_FEATURE_CARD_FAILED,
    response
  };
}


export function createFeature(boardId) {
  return {
    type: actionTypes.MEETINGBOARD___CREATE_FEATURE,
    boardId
  };
}

export function createFeatureSuccess() {
  return {
    type: actionTypes.MEETINGBOARD___CREATE_FEATURE_SUCCESS,
  };
}

export function createFeatureFailed() {
  return {
    type: actionTypes.MEETINGBOARD___CREATE_FEATURE_FAILED,
  };
}

export function updateFeature(term, featureId) {
  return {
    type: actionTypes.MEETINGBOARD___UPDATE_FEATURE,
    term,
    featureId
  };
}

export function updateFeatureSuccess() {
  return {
    type: actionTypes.MEETINGBOARD___UPDATE_FEATURE_SUCCESS,
  };
}

export function updateFeatureFailed() {
  return {
    type: actionTypes.MEETINGBOARD___UPDATE_FEATURE_FAILED,
  };
}


export function deleteFeature(featureId) {
  console.log('featureId', featureId);
  return {
    type: actionTypes.MEETINGBOARD___DELETE_FEATURE,
    featureId
  };
}

export function deleteFeatureSuccess() {
  return {
    type: actionTypes.MEETINGBOARD___DELETE_FEATURE_SUCCESS,
  };
}

export function deleteFeatureFailed(error) {
  console.log('error', error);
  return {
    type: actionTypes.MEETINGBOARD___DELETE_FEATURE_FAILED,
  };
}
