import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

import { getTasksQuery } from '@shared/lib/getTasksQuery/getTask.service'

export const getTasks = asyncHandler(async (req: Request, res: Response) => {
	const allowedParams = ['page', 'limit']
	const hasInvalidQueries = Object.keys(req.query).some(
		param => !allowedParams.includes(param)
	)
	
	if (hasInvalidQueries) {
		res.status(400)
		throw new Error('Недопустимые параметры')
	}

	const page = parseInt(req.query.page as string) || 1
	const limit = parseInt(req.query.limit as string) || 10

	const tasks = await getTasksQuery(page, limit)

	res.json(tasks)
})
