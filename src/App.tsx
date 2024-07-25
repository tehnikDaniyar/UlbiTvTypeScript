import { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
export { CardVariant } from "./components/Card";
import UserList from "./components/UserLit";
import { IUser } from "./types/types";
import axios from "axios";

export default function App() {

	// const users: IUser[] = [
	// 	{
	// 		id: 1,
	// 		username: 'MAGA',
	// 		email: 'dfdfdfdf@dfdf.dfd',
	// 		adress: {
	// 			street: 'dsd',
	// 			city: 'sasas',
	// 			zipcode: 'ggtgtg'
	// 		}
	// 	},
	// 	{
	// 		id: 2,
	// 		username: 'Serega',
	// 		email: 'dfdfdfdf@dfdf.dfd',
	// 		adress: {
	// 			street: 'Gorkogo',
	// 			city: 'Bishkek',
	// 			zipcode: 'ggtgtg'
	// 		}
	// 	}
	// ]

	const [users, setUsers] = useState<IUser[]>([]);

	useEffect(() => {
		fetchUsers();
	}, []);

	async function fetchUsers() {
		const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
		console.log(responce.data);
		setUsers(responce.data);
	};

	return (
		<>
			<div>
				<Card
					onClick={(num) => { console.log('click', num) }}
					width="200px"
					height="200px"
					variant={CardVariant.primary}
				>
					<button>button</button>
					<textarea name="text" id="txt"></textarea>
				</Card>
				<UserList users={users}>
				</UserList>
			</div>
		</>
	)
}