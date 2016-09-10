/**
 * Created by lusiwei on 16/9/10.
 */
'use strict';

const mongoose = require('mongoose');
const config = require('../config.json');

mongoose.Promise = global.Promise;
export const db = mongoose.connect(config.mongodb.host);