import Card, { CardVariant } from "./components/Card";
export { CardVariant } from "./components/Card";



export default function App() {
	return (
		<>
			<div>
				<Card
					onClick={(num) => console.log('click', num)}
					width="200px"
					height="200px"
					variant={CardVariant.primary}
				>
					<button>button</button>
					<textarea name="text" id="txt"></textarea>
				</Card>
			</div>
		</>
	)
}