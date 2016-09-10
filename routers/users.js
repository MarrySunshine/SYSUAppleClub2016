/**
 * Created by lusiwei on 16/9/10.
 */
'use strict';

import UserModel from '../models/UserModel'
import filter from '../modules/filter'

let router = require('koa-router')();
router.prefix('/users');

export default router
    .get('/', filter.authorization, async ctx => {
        try {
            let users = await UserModel.findAll();
            ctx.body = { users };
        } catch (error) {
            ctx.body = { error };
        }
    })
    .post('/', async ctx => {
        let { name, phone, student_number, college, gender, interest } = ctx.body;
        try {
            let user = await UserModel.addOne(name, gender, college, student_number, interest, phone);
            ctx.body = { user };
        } catch (error) {
            ctx.body = { error };
        }
    })
    .del('/:id', filter.authorization, async ctx => {
        try {
            await UserModel.removeOne(ctx.params.id);
            ctx.body = {};
        } catch (error) {
            ctx.body = { error };
        }
    })