import {prisma} from '@shared/db/prisma/prisma'
import { ECategories } from '@prisma/client'

export const getCategoryId = async (category: ECategories | '') => {
	if(!category) return null

	return await prisma.categories.findFirst({
		where: {
			name: category
		},

		select: {
			id: true
		}
	})
}