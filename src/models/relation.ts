import StudentModel from './modules/Students'
import ClassModel from './modules/Classes'

// const TeacherModel = require('./modules/Teachers')

ClassModel.hasMany(StudentModel)
StudentModel.belongsTo(ClassModel)

// ClassModel.hasMany()