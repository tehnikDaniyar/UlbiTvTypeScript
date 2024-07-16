import Card, { CardVariant } from "./components/Card";
export { CardVariant } from "./components/Card";
import users from './API/users.json'
import UserList from "./components/UserLit";



export default function App() {
	// const users = JSON.parse(usersJSON);
	console.log(users);
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