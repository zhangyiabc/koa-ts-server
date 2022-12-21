import Router from 'koa-router'
import classRouter from './modules/classRouter'
import testRouter from './modules/testRouter'
import studentRouter from './modules/studentRouter'

import singerRouter from './modules/SingerRouter'
function routerContainer(): Router {
  const router = new Router()
  // const a = "a"
  router.use('/api/class', classRouter.routes())
  router.use('/api/test', testRouter.routes())
  router.use('/api/student', studentRouter.routes())
  router.use('/api/singer', singerRouter.routes())
  return router
}


export default routerContainer