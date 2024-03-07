/* eslint-disable no-console */
/*--es-module-specifier-resolution=node */
import express from 'express'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware'

const START_SERVER = () => {
  const app = express()

  app.use(express.json())
  app.use('/v1', APIs_V1)

  //handle error middleware
  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`I am running at ${env.APP_HOST}:${env.APP_PORT}/`)
  })
  //clean up after the server stop
  exitHook(signal => {
    CLOSE_DB()
    console.log(`Exit with ${signal}`)
  })
}
//comment IIFE(Immediately Invoked Function Expression)
;(async () => {
  try {
    console.log('Connect to database')
    await CONNECT_DB()
    console.log('2.Connect to MongoDB Atlas')

    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()
// CONNECT_DB()
//   .then(() => {
//     console.log('Connect to database')
//   })
//   .then(() => {
//     START_SERVER()
//   })
//   .catch(err => {
//     console.error(err)
//     process.exit(0)
//   })
