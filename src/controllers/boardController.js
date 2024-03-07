import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  try {
    res.status(StatusCodes.CREATED).send('POST from board')
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}
