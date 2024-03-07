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

const getDetails = async (req, res, next) => {
  try {
    const boardId = req.params.id
    const result = await boardService.getDetails(boardId)
    res.status(StatusCodes.OK).send(result)
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew,
  getDetails
}
