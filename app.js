import Koa from 'koa'
import session from 'koa-session2'

import UserModel from './models/UserModel'

import users from './routers/users'
import auth from './routers/auth'

const app = new Koa();

app.use(session({
    key: 'sysu club 2016'
}));

app.use(users.routes());
app.use(auth.routes());

app.listen(8899, () => console.log('server started 8899'));

export default app;