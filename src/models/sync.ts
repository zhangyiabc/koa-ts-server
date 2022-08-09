import { sequelize } from '@/models/db'

import('./modules/Classes')
import('./modules/Students')
import('./modules/Teachers')
sequelize.sync({force:true}).then((res) => {
  console.log('所有模型已同步')
}).catch(err => {
  console.log(err)
})