import { DataTypes }  from "sequelize"
import { sequelize } from "../db"

const Student = sequelize.define('Student', 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['0', '1']] // 0 代表女性， 1 代表男性
      }
      
    },
  },
  {
    createdAt: true,
    updatedAt: false,
    paranoid: true,
    tableName: 'Students'
  }
)


export default Student