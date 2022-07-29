import Classes from "@/models/modules/Classes";
import validate from 'validate.js'
import { ClassInput, ClassOuput } from '@/models/modules/Classes'
import { MessageConfig } from '@/config/out'

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

export  {
  addClass
}