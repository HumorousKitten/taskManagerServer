import express from 'express'

const app = express()

async function main() {
	app.use(express.json())
}

main()