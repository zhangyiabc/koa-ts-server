import '@/models/init'
import './routers/index'
// console.log(process.env.NODE_ENV )
// import '@/test/class.test'

enum Books {
  tea = 'teacher',
  stu = 'student'
}

const BooksMap: Record<Books, string> = {
  [Books.stu]: '老师',
  [Books.tea]: '学生'
  // tea: teacher
}