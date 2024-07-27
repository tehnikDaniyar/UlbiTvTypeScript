import { FC } from "react"
import { ITodos } from "../types/types"


interface TodoItemProps {
	todo: ITodos;
}


const TodoItem: FC<TodoItemProps> = ({ todo }) => {
	return (
		<div key={todo.id}>
			<input type="checkbox" checked={todo.completed}></input>
			{todo.id}{todo.title}
		</div>
	)
};

export default TodoItem