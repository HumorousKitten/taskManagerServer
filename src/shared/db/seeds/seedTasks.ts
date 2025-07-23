import {prisma} from '@shared/db/prisma/prisma'
import { EStatus } from '@prisma/client'

interface ITasks {
	title: string
	status: EStatus
}

const tasks: ITasks[] = [
	{
		title: 'testTitle1',
		status: 'ToDo',
	},

	{
		title: 'testTitle2',
		status: 'ToDo'
	},

	{
		title: 'testTitle3',
		status: 'ToDo'
	},

	{
		title: 'testTitle4',
		status: 'ToDo'
	},

	{
		title: 'testTitle5',
		status: 'ToDo'
	},

	{
		title: 'testTite6',
		status: 'ToDo'
	}
]

async function seedTasks() {
	console.log('Начинаем очистку таблицы tasks...')

	await prisma.tasks.deleteMany()

	console.log('Начинаем заполнение таблицы tasks...')

	for (const task of tasks) {
		await prisma.tasks.create({
			data: task
		})
	}

	console.log('Заполнение таблицы tasks...')
}

seedTasks()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
