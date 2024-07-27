import UserPage from "./components/UsersPage"
import TodosPage from "./components/TodosPage"

import { BrowserRouter, Route, Routes, Link, RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
	{
		path: '/users',
		element: <UserPage />
	},
	{
		path: '/todos',
		element: <TodosPage />
	}
])

export default function App() {


	return (
		<>
			<Link to={'/users'}>users</Link>
			<RouterProvider router={router} />
		</>
		// <BrowserRouter>
		// 	<Link to={'/users'}>Users</Link>
		// 	<Link to={'/todos'}>Todos</Link>
		// 	<Routes>
		// 		<Route path="/users" element={<UserPage />} />
		// 		<Route path="/todos" element={<TodosPage />} />
		// 	</Routes>
		// </BrowserRouter>

	)
}