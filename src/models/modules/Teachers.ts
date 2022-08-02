// import { DataTypes }  from "sequelize"
// import { sequelize } from "../db"

import { CreationOptional, DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../db'

interface TeacherAttributes {
  id: number
  age: number
  name: string
  sex: '0' | '1'
  isHandmaster: boolean
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface TeacherInput extends Pick<TeacherAttributes, 'name' | 'age' | 'sex' | 'isHandmaster'>{}
export interface TeacherOutput extends TeacherAttributes {}

class Teacher extends Model<TeacherAttributes, TeacherInput> implements TeacherAttributes {
  declare id: CreationOptional<number>
  // declare id: number
  public name!: string
  declare sex: '0' | '1'
  declare isHandmaster: boolean
  declare age: number
}

Teacher.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 18,
      max: 80
    }
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['0', '1']] // 0 代表女性， 1 代表男性
    }
  },
  isHandmaster: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
},
{
  timestamps: true,
  sequelize: sequelize,
  paranoid: true,
  tableName: 'Teachers'
})

export default Teacher