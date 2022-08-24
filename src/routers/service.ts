import Router from 'koa-router'
import classRouter from './modules/classRouter'
import testRouter from './modules/testRouter'

function routerContainer(): Router {
  const router = new Router()
  // const a = "a"
  router.use('/api/class', classRouter.routes())
  router.use('/api/test', testRouter.routes())
  return router
}


export default routerContainer