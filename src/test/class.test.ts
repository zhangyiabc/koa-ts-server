import { addClass, getClassDetail } from "@/services/modules/Classes"
addClass({
  name: '高三九班',
  description: '这是一段描述'
}).then(res => {
  console.log(res)
})

getClassDetail(1).then(res => {
  console.log(res)
})