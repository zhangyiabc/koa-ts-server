# Koa + TS + Mysql + Log4Js
本项目利用koa框架 mysql数据库 ts 以及Log4js记录日志 apidoc生成文档

# 命令说明
## npm run dev
生成接口文档，并启动`nodemon`监听文件改变


## npm run build
将ts代码编译成js


## npm run start:dist
运行dist中的文件


## npm run doc
生成接口文档

# 生成接口注释写法
![](https://test-zyd.oss-cn-beijing.aliyuncs.com/tuchuang/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220729112105.png)
若想查看更多写法， 请参考apidoc文档[https://apidocjs.com/](https://apidocjs.com/)


``` json
koa-ts-server
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ .prettierrc.js
├─ apidoc.json // 接口文档配置
├─ nodemon.json // nodemon配置
├─ package-lock.json
├─ package.json
├─ path.tsconfig.json
├─ README.md
├─ src
│  ├─ index.ts
│  ├─ logs // 日志文件
│  ├─ middlewares // 中间件
│  ├─ models 
│  ├─ routers
│  ├─ services
│  ├─ test
│  ├─ config // 配置
├─ tsconfig-paths-bootstrap.js
└─ tsconfig.json

```