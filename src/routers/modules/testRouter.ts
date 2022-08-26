import Router, { RouterContext } from 'koa-router'
import { getClassDetail } from '@/services/modules/Classes'
import cacheMiddleware from '@/middlewares/cacheMiddleware'
const router: Router = new Router()

router.post('/send', async (ctx: RouterContext, next: () => Promise<void>) => {
  console.log(7, ctx.request.body)
  ctx.body = {
    name: 'zhangyi'
  }
  // setTimeout(() => {
  //   console.log(ctx.req)
  // }, 500)
})

router.get('/', cacheMiddleware(500), async (ctx: RouterContext, next: () => Promise<void>) => {
  const id = ctx.request.query.id
  if (id) {
    const data = await getClassDetail(Number(id))
    // console.log(data)
    ctx.body = data
    await next()
  }
})


export default router