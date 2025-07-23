import { prisma } from '@shared/db/prisma/prisma'
import { ECategories } from '@prisma/client'

interface ICategories {
	name: ECategories
}

const categories: ICategories[]  = [
	{
		name: 'Bug'
	},

	{
		name: 'Feature'
	},

	{
		name: 'Documentation'
	},

	{
		name: 'Refactor'
	},

	{
		name: 'Test'
	}
]

async function seedCategories() {
	console.log('Начинаем очистку таблицы categories...')

	await prisma.categories.deleteMany()

	console.log('Начинаем заполнение таблицы categories...')

	for (const category of categories) {
		await prisma.categories.create({
			data: category
		})
	}

	console.log('таблица categories заполнена')
}

seedCategories()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
