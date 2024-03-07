import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/board.service'

const createNew = async (req, res, next) => {
  try {
    const createdBoard = await boardService.createNew(req.body)
    res.status(StatusCodes.CREATED).send(createdBoard)
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}
