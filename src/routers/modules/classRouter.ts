import Router, { RouterContext } from 'koa-router'
import { addClass, deleteClass } from '@/services/modules/Classes'

const router: Router = new Router()
/**
 * @api {post} /api/class 新增班级
 * @apiName 新增班级
 * @apiGroup class
 * @apiDescription 已新增的班级信息
 * @apiVersion  1.0.0
 * @apiParam {String} name='高三一班' 
 * @apiParam {String} description='这是一段描述' 
 * @apiParamExample  {json} Request-Example:
 * {
 *     name: "高三一班",
 *     description: "这是一段描述"
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {String} msg  success
 * @apiSuccess {Object} data 用户信息
 * @apiError REGISTER_FAILURE The register failure.
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *  code: 200,
 *  msg: "success"
 *  data: {
 *    name: '',
 *    id: '',
 *    description: '',
 *    ...
 *  }
 * }
 * 
 * 
 */
router.post('/', async (ctx: RouterContext, next: () => Promise<void> ) => {
  // const res = await addClass(ctx.request.)
  const res = await addClass(ctx.request.body)
  ctx.body = res
  await next()
})

/**
 * @api {delete} /api/class 删除班级
 * @apiName 删除班级
 * @apiGroup class
 * @apiVersion  1.0.0
 * @apiParamExample  {json} Request-Example:
 * {
 *     id: 1
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {String} msg  success
 * @apiSuccess {Object} data 
 * @apiError REGISTER_FAILURE The register failure.
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *  code: 200,
 *  msg: "success"
 *  data: ''
 * 
 * 
 */
router.delete('/', async (ctx: RouterContext, next: () => Promise<void>) => {
  const res = await deleteClass(ctx.request.body.id)
  ctx.body = res
  await next()
})

export default router
