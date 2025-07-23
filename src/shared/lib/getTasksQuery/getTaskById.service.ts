import { prisma } from '@shared/db/prisma/prisma'

export const getTaskByIdQuery = async (id: number) => {
	const task = await prisma.tasks.findUnique({
		where: { task_id: id },
		select: {
			title: true,
			description: true,
			status: true,
			priority: true,

			category: {
				select: {
					id: true,
					name: true
				}
			}
		}
	})

	return {
		...task,
		category: task?.category?.name
	}
}
