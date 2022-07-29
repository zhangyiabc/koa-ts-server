import Router from 'koa-router'
const router: Router = new Router()
import path from 'path'
import koaStatic from 'koa-static'


// router.get(/\/assets\/*/, async (ctx, next) => {
//   console.log(path.resolve(__dirname + '../../../..' + '/public/apidoc/assets'))
//   koaStatic(path.resolve(__dirname + '../../../..' + '/public/apidoc/assets'))
// })
// router.get('/apidoc', async (ctx, next) => {
//   console.log('apidoc')
//   koaStatic(path.resolve(__dirname + '../../../..' + '/public/apidoc'))
// })


export default router