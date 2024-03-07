/*eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/board.model'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'

const createNew = async reqBody => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    const createdBoard = await boardModel.createNew(newBoard)

    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    return getNewBoard
  } catch (error) {
    throw error
  }
}

const getDetails = async id => {
  try {
    console.log(id);
    const res = await boardModel.getDetails(id)
    if (!res) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found')
    }
    return res
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew,
  getDetails
}
