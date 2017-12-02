import Router = require('koa-router');

var nmapRouter = new Router();


nmapRouter.get('/nmap', (ctx, next) => {
    ctx.body = "ok"
});

export = nmapRouter;