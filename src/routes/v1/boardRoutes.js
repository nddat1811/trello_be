import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardValidation } from '~/validations/boardValidation'
import { boardController } from '~/controllers/boardController'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Hello World! board')
})
router.get('/v2', (req, res) => {
  console.log(req.body)
  res.send('test')
})
router.post('/', boardValidation.createNew, boardController.createNew)

export const boardRouter = router
