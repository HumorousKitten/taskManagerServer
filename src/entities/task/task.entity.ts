export class TaskEntity {
	constructor(
		public id: number | null,
		public title: string,
	){
		this.validateTitle(title)
	}

	private validateTitle(title: string) {
		if(!title.length) {
			throw new Error('Название задачи не может быть пустым')
		}
	}

	rename(newTitle: string) {

	} 
}