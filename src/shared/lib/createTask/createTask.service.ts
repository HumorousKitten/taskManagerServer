import { TaskEntity } from '@entities/index'
import { prisma } from '@shared/db/prisma/prisma'

interface IData {
	title: string
	status: 'ToDo'
}

export const createTaskQuery = async (data: IData) => {
	const taskService = new TaskEntity(data.title, data.status)

	const newTask = await prisma.tasks.create({
		data: data,
		select: {
			task_id: true,
			title: true,
			description: true,
			status: true,
			priority: true,
			createdAt: true,

			category: {
				select: {
					id: true,
					name: true
				}
			}
		}
	})

	return newTask
}
