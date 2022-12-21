import { MessageConfig } from "@/config/message"
import { ISingerInput, ISingerOutput } from "@/models/constants/modelInterface"
import Singer from "@/models/modules/Singer"
import { PageIv, PageOv } from "@/typings/page"

// Singer.create({
//   age: 18,
//   name: '周杰伦'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
// // 增删改查
// const addSinger = async () => {
//   //
// }

interface ISingerParams extends ISingerInput, Partial<PageIv> {}

const getAllSinger = async (singerParams?: ISingerParams): Promise<MessageConfig<{list: ISingerOutput[]; paginate: PageOv}>> => {

  const result = await Singer
  .find(singerParams ? singerParams :{})
  .skip(((singerParams?.page || 1) - 1) * (singerParams?.size || 10))
  .limit(singerParams?.size || 10)
  
  const total = await Singer
  .find(singerParams ? singerParams :{})
  .countDocuments()

  return {
    code: '1001',
    data: {
      list: result,
      paginate: {
        page: singerParams?.age || 1,
        size: singerParams?.size || 10,
        total: total
      }
    },
    msg: 'success'
  }
}

export {
  getAllSinger
}