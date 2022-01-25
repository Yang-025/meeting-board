
const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body');
// 靜態檔案
const serve = require("koa-static");
const mount = require('koa-mount');
// 路由
const router = require('koa-router');

const cors = require('@koa/cors');
const routes = require('./routes');

const app = new Koa();

const server = require('http').Server(app);
const io = require('socket.io')(server);


// 配置cookie加密的key
app.keys = ['ttttestmmmm'];

app.use(koaBody());
app.use(cors());


const appRouter = new router()
appRouter.use(routes.routes())

app.use(appRouter.routes())

console.log('API list: \n', routes.stack.map(i => `[${i.methods}] ${i.path}`))

// method 1
app.use(serve(path.join(__dirname,"../public")));
// method 2
// app.use(mount('/', serve(path.join(__dirname,"../public")))) // mount for front-end pages


app.listen(3353);
server.listen(3005);

io.on('connection', function (socket) {
  socket.on('client:onConnect', function (data) {
    console.log('>>>>>>> board', data);
  });
});
app.context.io = io;

module.exports = app;
