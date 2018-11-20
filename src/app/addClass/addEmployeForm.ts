export class AddEmployeForm{
	
	id: number;

	constructor(
    	public idEmploye: string,
		public nomEmploye: string,
		public prenomEmploye: string,
		public dateNaissance: Date,
		public dateEntre: Date,
    	public numSecu: string,
		public mdp: string,
		public statutEmp: any,
		public dateSortie?: Date
	){}

}