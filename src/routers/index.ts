import path from 'path'
import fs from 'fs'
import Koa from 'koa'
const app = new Koa();
import bodyParser from 'koa-bodyparser'

import loggerMiddleware from '@/middlewares/loggerMiddleware';
import staticFileMiddleware from '@/middlewares/staticFileMiddleware';

import routerContainer from './service'
app.use(staticFileMiddleware('/apidoc', path.resolve(__dirname + '../../..' + '/public')))
app.use(staticFileMiddleware('/assets', path.resolve(__dirname + '../../..' + '/public/apidoc')))


app.use(loggerMiddleware)

app.use(bodyParser())

const routers = routerContainer()

app.use(routers.routes()).use(routers.allowedMethods())


app.listen(3123)