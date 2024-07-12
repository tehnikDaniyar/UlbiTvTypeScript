import react from "react";

interface CardProps {
	width: string,
	height: string
}



export default function Card({ width, height }: CardProps) {
	return (
		<div style={{ width, height, background: 'gray' }}>

		</div>
	)
}