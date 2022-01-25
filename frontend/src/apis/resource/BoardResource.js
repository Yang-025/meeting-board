// 測試用

import ApiService from '../ApiService';


const BoardResource = {
  getBoard: (boardId) => ApiService.get(
    `/board/${boardId}`
  ),
  createFeatureCard: (feature, evaluation, cardInfo, boardId) => ApiService.post(
    `/board/${boardId}/card`,
    {
      data: {
        feature,
        evaluation,
        cardInfo
      }
    }
  ),
  deleteFeatureCard: (feature, evaluation, cardId, boardId) => ApiService.post(
    `/board/${boardId}/card/delete`,
    {
      data: {
        feature,
        evaluation,
        cardId
      }
    }
  ),
  createFeature: (boardId) => ApiService.post(
    `/board/${boardId}/feature`,
  ),
  deleteFeature: (boardId, featureId) => ApiService.post(
    `/board/${boardId}/feature/delete`,
    {
      data: { featureId }
    }
  ),
  updateFeature: (boardId, term, featureId) => ApiService.post(
    `/board/${boardId}/feature/update`,
    {
      data: { term, featureId }
    }
  ),


};

export default BoardResource;
