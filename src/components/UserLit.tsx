import { FC } from "react"
import { IUser } from "../types/types";

interface UserListProps {
	users: IUser[];
}


const UserList: FC<UserListProps> = ({ users }) => {

	return (
		<div>
			{
				users.map(user =>
					<div key={user.id}>
						`${user.id} ${user.username} проживает в городе ${user.adress.city} на улице ${user.adress.street}`
					</div>
				)
			}
		</div>
	)
}

export default UserList;