// 缓存中间件
import { RouterContext } from 'koa-router'
import { Middleware } from "koa"
import { createClient } from 'redis'
const client = createClient()
export default function (outTime: number): Middleware<{any: any}> {
  return async (ctx: RouterContext, next: () => Promise<void>) => {
    const key = ctx.request.url
    if (!client.isReady) {
      await client.connect()
    }
    try {
      const value = await client.get(key)
      if ( value ) {
        const result = JSON.parse(value)
        ctx.body = result
      } else {
        await next()
        await client.setEx(key, outTime, JSON.stringify(ctx.body))
      }
    } catch (error) {
      ctx.body = JSON.parse(error)
    }
  }
}