import { sqlLogger } from '@/config/logger'
import { Sequelize } from 'sequelize'
import { dbConfig } from '../config/db'
// const {Sequelize} = require('sequelize')

// console.log(dbConfig)
const sequelize = new Sequelize({
  ...dbConfig,
  logging: (msg) => {
    // console.log(msg)
    sqlLogger.debug(msg)
  }
})

export {
  sequelize
}
