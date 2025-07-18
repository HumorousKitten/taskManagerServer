import {prisma} from '@shared/db/prisma/prisma'
import { EStatus, EPriority, ECategories } from '@prisma/client'
import { TaskEntity } from '@entities/index'
import { getCategoryId } from '../getCategoryId/getCategoryId.service'

interface IData {
	title: string
	status: EStatus
	description?: string | null
	priority?: EPriority | null
	category?: ECategories | null
}

export const updateTaskQuery = async (id: number, data: IData) => {
	const taskService = new TaskEntity(data.title, data.status)

	const {category, ...fieldsData} = data

	const categoryId = category ? await getCategoryId(category) : null

	const updateData = {
		...fieldsData,
		category_id: categoryId ? categoryId.id : null
	}

	const updatedTask = await prisma.tasks.update({
		where: {
			task_id: id
		},
		data: updateData,
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

	return updatedTask
}