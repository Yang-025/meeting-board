import { Observable, Subject, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, concat } from 'rxjs';
import { ofType } from 'redux-observable';
import { mergeMap, concatMap, tap, mapTo, map, catchError, retry, retryWhen, takeUntil, flatMap, delay } from 'rxjs/operators';
import Resource from '~~apis/resource';
import * as MeetingBoardActions from './MeetingBoardActions';


export const getBoardEpic = (action$, state$) => {
  return action$.pipe(
    ofType(MeetingBoardActions.actionTypes.MEETINGBOARD___GET_BOARD),
    mergeMap((action) => {
      return from(Resource.BoardResource.getBoard(action.boardId))
        .pipe(
          map(response => MeetingBoardActions.getBoardSuccess(response)),
          catchError(error => of(MeetingBoardActions.getBoardFailed(error)))
        );
    })
  );
};

export const addFeatureCardEpic = (action$, state$) => {
  return action$.pipe(
    ofType(MeetingBoardActions.actionTypes.MEETINGBOARD___ADD_FEATURE_CARD),
    mergeMap((action) => {
      const { boardId } = state$.value.meetingBoard;
      // const
      const { feature, evaluation, cardInfo } = action;
      return from(Resource.BoardResource.createFeatureCard(feature, evaluation, cardInfo, boardId))
        .pipe(
          map(response => MeetingBoardActions.addFeatureCardSuccess(response)),
          catchError(error => of(MeetingBoardActions.addFeatureCardFailed(error)))
        );
    })
  );
};


export const deleteFeatureCardEpic = (action$, state$) => {
  return action$.pipe(
    ofType(MeetingBoardActions.actionTypes.MEETINGBOARD___DELETE_FEATURE_CARD),
    mergeMap((action) => {
      const { boardId } = state$.value.meetingBoard;
      // const
      const { feature, evaluation, cardId } = action;
      return from(Resource.BoardResource.deleteFeatureCard(feature, evaluation, cardId, boardId))
        .pipe(
          map(response => MeetingBoardActions.deleteFeatureCardSuccess(response)),
          catchError(error => of(MeetingBoardActions.deleteFeatureCardFailed(error)))
        );
    })
  );
};

export const createFeatureEpic = (action$, state$) => {
  return action$.pipe(
    ofType(MeetingBoardActions.actionTypes.MEETINGBOARD___CREATE_FEATURE),
    mergeMap((action) => {
      const { boardId } = state$.value.meetingBoard;
      return from(Resource.BoardResource.createFeature(boardId))
        .pipe(
          map(response => MeetingBoardActions.createFeatureSuccess(response)),
          catchError(error => of(MeetingBoardActions.createFeatureFailed(error)))
        );
    }),
    catchError(error => console.log('$$$$$$$$$$$$$', error))
  );
};

export const updateFeatureEpic = (action$, state$) => {
  return action$.pipe(
    ofType(MeetingBoardActions.actionTypes.MEETINGBOARD___UPDATE_FEATURE),
    mergeMap((action) => {
      const { boardId } = state$.value.meetingBoard;
      return from(Resource.BoardResource.updateFeature(boardId, action.term, action.featureId))
        .pipe(
          map(response => MeetingBoardActions.updateFeatureSuccess(response)),
          catchError(error => of(MeetingBoardActions.updateFeatureFailed(error)))
        );
    }),
    catchError(error => console.log('$$$$$$$$$$$$$', error))
  );
};

export const deleteFeatureEpic = (action$, state$) => {
  return action$.pipe(
    ofType(MeetingBoardActions.actionTypes.MEETINGBOARD___DELETE_FEATURE),
    mergeMap((action) => {
      const { boardId } = state$.value.meetingBoard;
      return from(Resource.BoardResource.deleteFeature(boardId, action.featureId))
        .pipe(
          map(response => MeetingBoardActions.deleteFeatureSuccess(response)),
          catchError(error => of(MeetingBoardActions.deleteFeatureFailed(error)))
        );
    }),
    catchError(error => console.log('$$$$$$$$$$$$$', error))
  );
};

export default [
  getBoardEpic,
  addFeatureCardEpic,
  deleteFeatureCardEpic,
  createFeatureEpic,
  deleteFeatureEpic,
  updateFeatureEpic
];

