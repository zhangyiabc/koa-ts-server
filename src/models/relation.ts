import StudentModel from './modules/Students'
import ClassModel from './modules/Classes'

// const TeacherModel = require('./modules/Teachers')

ClassModel.hasMany(StudentModel, {
  foreignKey: 'classKey',
  // as: 'classInfo',
  // foreignKeyConstraint: true,
  // sourceKey: 'id'
})
StudentModel.belongsTo(ClassModel)

// ClassModel.hasMany()