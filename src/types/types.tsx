export interface IAdress {
	street: string;
	city: string;
	zipcode: string;
}


export interface IUser {
	id: number;
	username: string;
	email: String;
	address: IAdress
}

export interface ITodos {
	UserId: number;
	id: number;
	title: string;
	completed: boolean;
}

