import express from 'express'
import dotenv from 'dotenv'

import { notFound, errorHandler } from '@shared/middleware/error.middleware'

import { prisma } from '@shared/db/prisma/prisma'

import {getTasksRoutes} from '@feature/index'

dotenv.config()

const app = express()

async function main() {
	app.use(express.json())

	const PORT = process.env.port || 5000

	app.use('/', getTasksRoutes)


	app.use(notFound)
	app.use(errorHandler)

	app.listen(PORT, () => console.log(`Server running in development mode in ${PORT} port`))
}

main().then(async () => {
	await prisma.$disconnect()
})
.catch(async e => {
	console.error(e)
	await prisma.$disconnect()
	process.exit(1)
})