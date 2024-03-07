import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRouter } from '~/routes/v1/boardRoutes'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Hello World! board')
})

router.use('/board', boardRouter)

export const APIs_V1 = router
