import { DataTypes }  from "sequelize"
import { sequelize } from "../db"

const Teacher = sequelize.define('Teacher', 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 10,
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
      allowNull: false,
      defaultValue: false
    }
  },
  {
    createdAt: true,
    updatedAt: false,
    paranoid: true,
    tableName: 'Teachers'
  }
) 

export default Teacher