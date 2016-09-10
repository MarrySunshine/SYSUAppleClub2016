/**
 * Created by lusiwei on 16/9/10.
 */
'use strict';

const mongoose = require('mongoose');
import { db } from '../modules/database'

const user_schema = new mongoose.Schema({
    name: String,
    gender: Number,
    college: String,
    phone: String,
    student_number: { type: String, unique: true },
    interest: [String],
    create_time: { type: Date, default: Date.now() }
});

user_schema.statics = {
    addOne(name, gender, college, student_number, interest, phone) {
        return new Promise(async (resolve, reject) => {
            let user = new UserModel({name, gender, college, student_number, interest, phone});
            user.save(error => {
                if (error) reject('用户已存在');
                else resolve(user);
            })
        })
    },
    removeOne(_id) {
        return new Promise(async (resolve, reject) => {
            try {
                let user = await UserModel.remove({ _id }).exec();
                resolve(user);
            } catch (error) {
                reject(error);
            }
        })
    },
    findAll() {
        return new Promise(async (resolve, reject) => {
            try {
                let users = await UserModel.find().sort('-create_time').exec();
                if (users.length === 0) reject('无数据');
                else resolve(users);
            } catch(error) {
                console.log(error);
                reject(error);
            }
        })
    }
};

const UserModel = db.model('users', user_schema);
export default UserModel;