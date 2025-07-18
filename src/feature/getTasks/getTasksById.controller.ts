import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

import { getTaskByIdQuery } from '@shared/lib/getTasksQuery/getTaskById.service'

export const getTasksById = asyncHandler(async (req: Request, res: Response) => {
	const {id} = req.params

	if(!id) {
		res.status(400)
		throw new Error('Параметр не существует')
	}

	if(!parseInt(id)) {
		res.status(400)
		throw new Error('Неверный параметр')
	}

	const task = await getTaskByIdQuery(+id)

	res.json(task)
})