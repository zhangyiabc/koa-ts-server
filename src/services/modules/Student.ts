import StudentModal from "@/models/modules/Students"
import validate from 'validate.js'
import { StudentInput, StudentOutput } from '@/models/modules/Students'
import { MessageConfig } from '@/config/message'
import { PageIv, PageOv } from '@/typings/page'

const addStudentRules = {
  name: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
    length: {
      minimum: 2,
      maximum: 10,
      message: "must be length is 2 - 10",
    },
  },
  sex: {
    presence: {
      allowEmpty: false,
    },
    type: "string",

  },
  classId: {
    presence: {
      allowEmpty: false,
    },
    numericality: {
      onlyInteger: true,
      strict: false,
    },
    // 拓展的方法
    ClassIsExist: true,
  },
}

const addStudent = async (addStudentBody: StudentInput): Promise<MessageConfig<StudentOutput | ''>> => {
  try {
    await validate.async(addStudentBody, addStudentRules)
  } catch (error) {
    return {
      code: "400",
      msg: JSON.stringify(error),
      data: ''
    }
  }
  const ins = StudentModal.build(addStudentBody)
  const res = await ins.save()
  return {
    msg: 'success',
    code: '1001',
    data: res.toJSON()
  }
}

interface GetAllStudent extends StudentInput, PageIv {
  id: number
}

interface OutAllStudent {
  list: StudentOutput[] | [],
  pagerInfo: PageOv
}

const getAllStudent = async (studentParams: Partial<GetAllStudent> = {}): Promise<MessageConfig<OutAllStudent>> => {
  const {name, id, sex, page = 1, size = 10} = studentParams
  const options: {
    name?: string
    sex?: '1' | '0'
    id?: number
    page?: number
    size?: number
  } = {}

  if (id) {
    options.id = id
  }

  if (name) {
    options.name = name
  }

  if (sex) {
    options.sex = sex
  }

  if (page) {
    options.page = page
  }

  if (size) {
    options.size = size
  }
  const res = await StudentModal.findAndCountAll<StudentModal>({
    // attributes: ['id', 'name', 'imgUrl', ],
    offset: (page - 1) * +size,
    limit: +size,
  })
  const temp = JSON.parse(JSON.stringify(res.rows))
  return {
    code: '1001',
    msg: 'success',
    data: {
      list: temp,
      pagerInfo: {
        total: res.count,
        size: size,
        page: page
      }
    }
  }
}

export {
  addStudent,
  getAllStudent
}