import { sqlLogger } from '@/config/logger'
import { Sequelize } from 'sequelize'
import { dbConfig } from '../config/db'
// const {Sequelize} = require('sequelize')

// console.log(dbConfig)
const sequelize = new Sequelize({
  ...dbConfig,
  logging: (msg) => {
    sqlLogger.debug(msg)
  }
})

export {
  sequelize
}

import mongoose from 'mongoose'

mongoose.connect('mongodb://121.40.140.122:27017/blog').then(() => {
  console.log('success')
}).catch(err => {
  console.log('报错了')
  console.log(err)
})
