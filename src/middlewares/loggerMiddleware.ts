import {koaLogger} from "koa-log4"
import { RouterContext } from 'koa-router'
import { apiLogger } from "../config/logger"

export default koaLogger(apiLogger, {
  level: "auto",
  format: `ip[:remote-addr]  method:[:method]  url:[:url]  status:[:status]  responseTime[:response-time]`
})
