import { Document } from "mongoose"
export interface ISingerAttributes extends Document {
  name: string
  age: number
  avatar: string
  sex: 1 | 0

  createdAt: Date
  updateAt: Date
}

export interface ISingerInput extends Partial<Pick<ISingerAttributes, 'name' | 'age' | 'sex'>>{}

export interface ISingerOutput extends ISingerAttributes{}