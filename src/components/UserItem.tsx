import { FC } from "react"
import { IUser } from "../types/types"

interface UserItemProps {
	user: IUser
	key: number
}


const UserItem: FC<UserItemProps> = ({ user }) => {
	return (
		<div style={{ border: '2px solid black', padding: '20px' }}>
			{`${user.id} ${user.username} проживает в городе ${user.address.city} на улице ${user.address.street}`}
		</div>
	)
}

export default UserItem