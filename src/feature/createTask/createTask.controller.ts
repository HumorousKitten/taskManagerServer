import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'

import { createTaskQuery } from '@shared/lib/createTask/createTask.service'

export const createTask = asyncHandler( async(req: Request, res: Response) => {
	const data = req.body

	const newTask = await createTaskQuery(data)

	res.json(newTask)
})