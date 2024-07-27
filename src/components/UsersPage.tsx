import react, { FC, useState, useEffect } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";




const UserPage: FC = () => {


	const [users, setUsers] = useState<IUser[]>([]);


	useEffect(() => {
		fetchUsers();
	}, []);

	async function fetchUsers() {
		const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
		setUsers(responce.data);
	};



	return (
		<List items={users} renderItem={(user) => <UserItem user={user} key={user.id}></UserItem>}></List>

	)
}