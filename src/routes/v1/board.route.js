import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardValidation } from '~/validations/board.validation'
import { boardController } from '~/controllers/board.controller'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Hello World! board')
})
router.get('/v2', (req, res) => {
  res.send('test')
})
router.post('/', boardValidation.createNew, boardController.createNew)

export const boardRouter = router
