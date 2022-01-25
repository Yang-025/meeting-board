
const router = require('koa-router');
const uuid = require('uuid');
const boardModel = require('../../../model/board');

const boardRouter = new router();

let boardData = boardModel.boardData;


boardRouter.get('/:boardId', (ctx, next) => {
  // TODO 判斷board
  const { boardId } = ctx.params;
  ctx.body = boardData;
});

boardRouter.post('/:boardId/card/', (ctx, next) => {
  // TODO 判斷board
  const { boardId } = ctx.params;
  const { feature, evaluation, cardInfo} = ctx.request.body;
  const newData = boardData.map(item => {
    if (item.feature.id === feature) {
      return {
        ...item,
        [evaluation]: [
          ...item[evaluation],
          cardInfo
        ]
      };
    }
    return item;
  });
  boardData = newData;
  // koa 取得socket instance的方法
  // https://github.com/socketio/socket.io/issues/2696
  ctx.io.emit('board:update', { data: boardData });
  ctx.body = boardData;
});

boardRouter.post('/:boardId/card/delete/', (ctx, next) => {
  // TODO 判斷board
  const { boardId } = ctx.params;
  const { feature, evaluation, cardId } = ctx.request.body;
  const newData = boardData.map(item => {
    if (item.feature.id === feature) {
      return {
        ...item,
        [evaluation]: item[evaluation].filter(d => (d.id !== cardId))
      };
    }
    return item;
  });
  boardData = newData;
  ctx.io.emit('board:update', { data: boardData });
  ctx.body = boardData;
});


// 建立空的feature
boardRouter.post('/:boardId/feature/', (ctx, next) => {
  // TODO 判斷board
  const { boardId } = ctx.params;
  const newData = [
    ...boardData,
    { feature: { name: 'whatever', id: uuid.v4() }, hard: [], routine: [], suggestion: [] }
  ]
  boardData = newData;
  ctx.io.emit('board:update', { data: boardData });
  ctx.body = boardData;
});

boardRouter.post('/:boardId/feature/delete', (ctx, next) => {
  // TODO 判斷board
  const { boardId } = ctx.params;
  const { featureId } = ctx.request.body;
  console.log(featureId);
  const newData = boardData.filter(item => {
    return item.feature.id !== featureId})
  boardData = newData;
  ctx.io.emit('board:update', { data: boardData });
  ctx.body = boardData;
});

boardRouter.post('/:boardId/feature/update', (ctx, next) => {
  // TODO 判斷board
  const { boardId } = ctx.params;
  const { featureId, term } = ctx.request.body;
  const newData = boardData.map(item => {
    if (item.feature.id === featureId) {
      return {
        ...item,
        feature: {
          id: featureId,
          name: term
        }
      }
    }
    return item;
  })
  boardData = newData;
  ctx.io.emit('board:update', { data: boardData });
  ctx.body = boardData;
});



module.exports = boardRouter;
