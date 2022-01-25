
const router = require('koa-router')
const boardRouter = require('./api/v1/board')
const apiRouter = new router()

apiRouter.use('/board', boardRouter.routes())
// apiRouter.use('/board', boardRouter.routes())

module.exports = apiRouter
