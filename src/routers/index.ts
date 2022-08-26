import path from 'path'
import Koa from 'koa'
const app = new Koa()
import bodyParser from 'koa-bodyparser'

import loggerMiddleware from '@/middlewares/loggerMiddleware'
import staticFileMiddleware from '@/middlewares/staticFileMiddleware'

import routerContainer from './service'

// 静态文件托管
app.use(staticFileMiddleware('/apidoc', path.resolve(__dirname + '../../..' + '/public')))
app.use(staticFileMiddleware('/assets', path.resolve(__dirname + '../../..' + '/public/apidoc')))
// app.use(staticFileMiddleware('/test', path.resolve(__dirname + '../../..' + '/public')))

// 日志记录
app.use(loggerMiddleware)

// 解析post请求参数
app.use(bodyParser({
  enableTypes: ['json', 'text']
}))

const routers = routerContainer()

// 各种api
app.use(routers.routes()).use(routers.allowedMethods())

// 处理响应code


app.listen(3123)