import { EStatus } from '@prisma/client'

export class TaskEntity {
	constructor(
		public title: string,
		public status: EStatus,
		public id?: number,
	){
		this.validateTitle(title)
	}

	private validateTitle(title: string) {
		if(!title.length) {
			throw new Error('Название задачи не может быть пустым')
		}
	}
}