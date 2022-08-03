import Classes from "@/models/modules/Classes"
import validate from 'validate.js'
import { ClassInput, ClassOuput } from '@/models/modules/Classes'
import { MessageConfig } from '@/config/message'

const addClassRules = {
  name: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
    length: {
      minimum: 1,
      maximum: 10,
      message: "must be length is 1 - 10",
    },
  }
}

const addClass = async (addClassbody: ClassInput): Promise<MessageConfig<ClassOuput | ''>> => {
  try {
    await validate.async(addClassbody, addClassRules)
  } catch (error) {
    return {
      code: "400",
      msg: error,
      data: ''
    }
  }
  const ins = Classes.build(addClassbody)
  const res = await ins.save()
  const result = res.toJSON()
  return {
    msg: '200',
    code: '200',
    data: result
  }
}

const deleteClass = async (classId: Pick<ClassInput, 'id'>): Promise<MessageConfig<''>> => {
  // 1. 判断该id是否存在
  if (!classId) {
    return {
      code: '406',
      msg: 'classId 不存在',
      data: ''
    }
  }
  const findRes = await Classes.findOne({
    where: {
      id: classId
    }
  })
  if (!findRes) {
    return {
      code: '1022',
      msg: 'database no has this classId',
      data: ''
    }
  }
  // 2. 进行删除
  const res = await Classes.destroy({
    where: {
      id: classId
    }
  })
  // 3. 返回
  if (Array.isArray(res)) {
    return res[0] ? {
      code: '1001',
      msg: '删除成功',
      data: ''
    } : {
      code: '200',
      msg: '删除失败',
      data: ''
    }
  } else {
    return res ? {
      code: '1001',
      msg: '删除成功',
      data: ''
    } : {
      code: '200',
      msg: '删除失败',
      data: ''
    }
  }

}

export {
  addClass,
  deleteClass
}