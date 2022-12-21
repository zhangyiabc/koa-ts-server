// 专辑
import { Schema, model } from "mongoose"
const AlbumSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  phone: { // 专辑图片
    type: String
  },
  author: { // 歌手
    type: String,
    required: true
  },
  created_at: {type: Date, default: new Date()}
})

export default model('Albums', AlbumSchema)