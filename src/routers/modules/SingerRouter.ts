import Router, { RouterContext } from 'koa-router'
import { getAllSinger } from '@/services/modules/Singer'
import cacheMiddleware from '@/middlewares/cacheMiddleware'


const router: Router = new Router()
router.get('/', cacheMiddleware(500), async (ctx: RouterContext, next: () => Promise<void>) => {
  const res = await getAllSinger(ctx.request.query)
  ctx.body = res
  await next()
})

export default router