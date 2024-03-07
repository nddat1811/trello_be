import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardValidation } from '~/validations/board.validation'
import { boardController } from '~/controllers/board.controller'

const router = express.Router()

router.post('/', boardValidation.createNew, boardController.createNew)

router.route('/:id').get(boardController.getDetails).put()

export const boardRouter = router
