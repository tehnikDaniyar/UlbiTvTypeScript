import axios from "axios";


import { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
export { CardVariant } from "./components/Card";
// import UserList from "./components/UserLit";
import { IUser } from "./types/types";
import { ITodos } from "./types/types";


import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventExmpl from "./components/EventExmpl";

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
	const [todos, setTodos] = useState<ITodos[]>([]);


	useEffect(() => {
		fetchUsers();
		fetchTodos();
	}, []);

	async function fetchUsers() {
		const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
		setUsers(responce.data);
	};

	async function fetchTodos() {
		const responce = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos/?_limit=10');
		setTodos(responce.data);
	};

	return (
		<>
			<div>
				<EventExmpl></EventExmpl>
				<Card
					onClick={(num) => { console.log('click', num) }}
					width="200px"
					height="200px"
					variant={CardVariant.primary}
				>
					<button>button</button>
					<textarea name="text" id="txt"></textarea>
				</Card>
				<List items={users} renderItem={(user) => <UserItem user={user} key={user.id}></UserItem>}></List>
				<List items={todos} renderItem={(todo) => <TodoItem todo={todo} key={todo.id}></TodoItem>}></List>
			</div>
		</>
	)
}