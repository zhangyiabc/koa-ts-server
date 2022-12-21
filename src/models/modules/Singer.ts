// 歌手
import { Schema, model } from "mongoose"
import { ISingerAttributes } from '../constants/modelInterface'

const SingerScheme = new Schema<ISingerAttributes>({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 18
  },
  avatar: {
    type: String,
    required: false
  },
  sex: {
    type: Number,
    required: false
  }
}, { timestamps: true })

const Singer = model<ISingerAttributes>('Singers', SingerScheme)
export default Singer