import { Middleware } from "koa";
import send from 'koa-send'
import {resolve} from 'path'
/**
 * 
 * @param path 页面路由
 * @param dirname 文件路径
 * @returns 
 */
export default function (path: string, dirname: string): Middleware<{}> {
  return async function (ctx, next) {
    let done = ''
    let opts: any = {}
    opts.index = 'index.html'
    if (ctx.path.indexOf(path) > -1 && ctx.method === 'GET') {
      
      opts.root = resolve(dirname)
      try {
        done =  await send(ctx, ctx.path, opts)
      } catch (error) {
        console.log(error)
      }
    }
    if (!done) {
      await next()
    }
  }
} 