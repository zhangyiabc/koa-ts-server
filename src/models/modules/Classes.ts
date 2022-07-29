import { CreationOptional, DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../db'
interface ClassAttributes {
  id: number;
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}



export interface ClassInput extends Optional<ClassAttributes, 'id' | 'name' > {}
// export interface ClassOuput extends Required<ClassAttributes> {}
export interface ClassOuput extends ClassAttributes {}


class Classes extends Model<ClassAttributes, ClassInput> implements ClassAttributes {
  declare id: CreationOptional<number>;
  public name!: string
  declare description?: string
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}
Classes.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
}, {
  timestamps: true,
  sequelize: sequelize,
  paranoid: true,
  tableName: 'Classes'
})

export default Classes
