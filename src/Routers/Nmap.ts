import Router = require('koa-router');
var nmap = require('libnmap');
import superagent = require('superagent');
var nmapRouter = new Router();

/**
 * @api /nmap?
 */
nmapRouter.get('/nmap', async (ctx, next) => {
    let url = ctx.query.url;
    var res = await superagent.get(url).send();
    ctx.body = { ok: true, data: res.text };
});

export = nmapRouter;