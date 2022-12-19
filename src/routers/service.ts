import Router from 'koa-router'
import classRouter from './modules/classRouter'
import testRouter from './modules/testRouter'
import studentRouter from './modules/studentRouter'
function routerContainer(): Router {
  const router = new Router()
  // const a = "a"
  router.use('/api/class', classRouter.routes())
  router.use('/api/test', testRouter.routes())
  router.use('/api/student', studentRouter.routes())
  return router
}


export default routerContainer