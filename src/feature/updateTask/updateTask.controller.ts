import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

import { updateTaskQuery } from '@shared/lib/updateTask/updateTask.service'

export const updateTask = asyncHandler( async(req: Request, res: Response) => {
	const {id} = req.params
	const data = req.body

	if(!id) {
		res.status(400)
		throw new Error('Параметр не существует')
	}

	if(!parseInt(id)) {
		res.status(400)
		throw new Error('Неверный параметр')
	}

	const updatedTask = await updateTaskQuery(+id, data.body)

	res.json(updatedTask)
})