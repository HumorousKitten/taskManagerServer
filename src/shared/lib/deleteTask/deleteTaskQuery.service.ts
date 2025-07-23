import { prisma } from '@shared/db/prisma/prisma'

export const deleteTaskQuery = async (id: number) => {
	const task = await prisma.tasks.delete({
		where: {
			task_id: id
		},
		select: {
			task_id: true,
			title: true,
			description: true,
			status: true,
			priority: true,
			createdAt: true,

			category: {
				select: {
					name: true
				}
			}
		}
	})

	return {
		...task,
		category: task.category?.name
	}
}
