// 缓存中间件
import { RouterContext } from 'koa-router'
import { Middleware } from "koa"
import { createClient } from 'redis'
import { redisLogger } from '@/config/logger'
const client = createClient()
const whiteCode = ['1001', '200']
export default function (outTime: number): Middleware<{any: any}> {
  return async (ctx: RouterContext, next: () => Promise<void>) => {
    const key = ctx.request.url
    if (!client.isReady) {
      await client.connect()
      redisLogger.info('success redis connect')
    }
    try {
      const value = await client.get(key)
      if ( value ) {
        const result = JSON.parse(value)
        const time = await client.ttl(key)
        redisLogger.info(`redis success get key[${key}] value[${JSON.stringify(result)}] EXTime[${time}]`)
        ctx.body = result
      } else {
        await next()
        if (ctx.body && whiteCode.includes((ctx.body as any).code)) {
          await client.setEx(key, outTime, JSON.stringify(ctx.body))
          redisLogger.info(`redis success set key[${key}] value[${JSON.stringify(ctx.body)}] EXTime[${outTime}]`)
        }
      }
    } catch (error) {
      ctx.body = JSON.parse(error)
      redisLogger.error('redis error ' + JSON.parse(error))
    }
  }
}