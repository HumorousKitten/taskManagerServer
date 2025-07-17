import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

import { prisma } from '@shared/db/prisma/prisma'
import { getTasksQuery } from '@shared/lib/getTasksQuery/getTask.service'


export const getTasks = asyncHandler(async (req: Request, res: Response) => {
	const page = parseInt(req.query.page as string) || 1
	const limit = parseInt(req.query.limit as string) || 10

	const tasks = await getTasksQuery(page, limit)

	res.json(tasks)
})
