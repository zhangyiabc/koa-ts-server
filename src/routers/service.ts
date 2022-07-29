import Router from 'koa-router'
import classRouter from './modules/classRouter'

function routerContainer(): Router {
  const router = new Router()
  // const a = "a"
  router.use('/api/class', classRouter.routes())
  return router
}



export default routerContainer