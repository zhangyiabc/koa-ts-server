// 拓展验证
import ClassModal from "@/models/modules/Classes"
import validate from "validate.js"
// 拓展class外键
validate.validators.ClassIsExist = async (value: number) => {
  // console.log(value)
  if (!value) {
    return 'class id must have'
  }
  const c = await ClassModal.findByPk(value)
  if (c) {
    return 
  } else {
    return "can't find"
  }

}