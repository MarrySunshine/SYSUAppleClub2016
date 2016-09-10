/**
 * Created by lusiwei on 16/9/10.
 */
'use strict';

const config = require('../config.json');

let router = require('koa-router')();
router.prefix('/auth');

export default router
    .post('/', ctx => {
        if (ctx.body.password === config.password) {
            ctx.session.auth = true;
            ctx.body = {}
        } else {
            ctx.body = {error: '密码错误'};
        }
    })
    .del('/', ctx => {
        ctx.session = {};
        ctx.body = {};
    })

