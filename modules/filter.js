/**
 * Created by lusiwei on 16/9/10.
 */
'use strict';

export default {
    async authorization(ctx, next) {
        if (ctx.session && ctx.session.auth) await next();
        else ctx.body = { error: '未登录' };
    }
}