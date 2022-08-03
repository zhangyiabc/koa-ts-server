import { CreationOptional, DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../db'

interface StudentAttributes {
  id: number;
  name: string;
  imgUrl: string
  sex: '0' | '1'
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface StudentInput extends Pick<StudentAttributes, 'name' | 'imgUrl' | 'sex'> {}
export interface StudentOutput extends StudentAttributes {}

class Student extends Model<StudentAttributes, StudentInput> implements StudentAttributes {
  declare id: CreationOptional<number>
  public name!: string
  declare sex: '0' | '1'
  declare imgUrl: string;
  // timestamps!
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
  }

},{
  timestamps: true,
  sequelize: sequelize,
  paranoid: true,
  tableName: 'Students'
})

export default Student