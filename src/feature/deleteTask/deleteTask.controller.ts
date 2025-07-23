import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

import { deleteTaskQuery } from '@shared/lib/deleteTask/deleteTaskQuery.service'

export const deleteTask = asyncHandler( async(req: Request, res: Response) => {
	const {id} = req.params

	if(!id) {
		res.status(400)
		throw new Error('Параметр не существует')
	}

	if(!parseInt(id)) {
		res.status(400)
		throw new Error('Неверный параметр')
	}

	const deleteTask = await deleteTaskQuery(+id)
	
	res.json(deleteTask)
})