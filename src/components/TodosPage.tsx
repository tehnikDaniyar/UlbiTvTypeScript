import react, { FC, useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";
import { ITodos } from "../types/types";



const TodosPage: FC = () => {

	const [todos, setTodos] = useState<ITodos[]>([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	async function fetchTodos() {
		const responce = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos/?_limit=10');
		setTodos(responce.data);
	};


	return (
		<List items={todos} renderItem={(todo) => <TodoItem todo={todo} key={todo.id}></TodoItem>}></List>
	)
};

export default TodosPage