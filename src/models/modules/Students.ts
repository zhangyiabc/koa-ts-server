import { CreationOptional, DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../db'

interface StudentAttributes {
  id: number;
  name: string;
  imgUrl: string
  age: number
  sex: '0' | '1'
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface StudentInput extends Pick<StudentAttributes, 'age' | 'name' | 'imgUrl' | 'sex'> {}
export interface StudentOutput extends StudentAttributes {}

class Student extends Model<StudentAttributes, StudentInput> implements StudentAttributes {
  declare id: CreationOptional<number>
  public name!: string
  declare sex: '0' | '1'
  declare imgUrl: string;
  declare age: number
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Student.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 3,
      max: 80
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['0', '1']] // 0 代表女性， 1 代表男性
    }
    
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // classId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // }
},{
  timestamps: true,
  sequelize: sequelize,
  paranoid: true,
  tableName: 'Students'
})

export default Student