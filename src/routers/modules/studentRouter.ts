import { addStudent, getAllStudent } from '@/services/modules/Student'
import Router, { RouterContext } from 'koa-router'

const router: Router = new Router()

/**
 * @api {post} /api/student 新增学生
 * @apiName 新增学生
 * @apiGroup student
 * @apiDescription 已新增的学生信息
 * @apiVersion  1.0.0
 * @apiParamExample  {json} Request-Example:
 * {
 *     name: '张三',
 *     sex: '0',
 *      age: 18,
 *     imgUrl: 'www.baidu.com',
 *     classId: 8
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
router.post('/', async (ctx: RouterContext, next: () => Promise<void>) => {
  const res = await addStudent(ctx.request.body)
  ctx.body = res
  await next()
})

/**
 * @api {get} /api/student 获取所有学生
 * @apiName 获取所有学生
 * @apiGroup student
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
router.get('/', async (ctx: RouterContext, next: () => Promise<void>) => {
  const res = await getAllStudent(ctx.request.query)
  ctx.body = res
  await next()
})