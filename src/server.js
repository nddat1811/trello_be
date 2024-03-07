/* eslint-disable no-console */
/*--es-module-specifier-resolution=node */
import express from 'express'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import exitHook from 'async-exit-hook'

const app = express()

const START_SERVER = () => {
  const hostname = 'localhost'
  const port = 3000

  app.get('/', (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(port, hostname, () => {
    console.log(`I am running at ${hostname}:${port}/`)
  })
  //clean up after the server stop
  exitHook(signal => {
    CLOSE_DB()
    console.log(`Exit with ${signal}`)
  })
}
//IIFE
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
