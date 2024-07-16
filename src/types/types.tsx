export interface IAdress {
	street: string;
	city: string;
	zipcode: number;
}


export interface IUser {
	id: number;
	username: string;
	email: String;
	adress: IAdress
}