import { prisma } from '@shared/db/prisma/prisma'

export const getTasksQuery = async (page: number, limit: number) => {
	const tasks = await prisma.tasks.findMany({
		skip: (page - 1) * limit,
		take: limit,
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

	return tasks
}
