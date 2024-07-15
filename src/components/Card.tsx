import React, { FC, useState } from "react";

export enum CardVariant {
	primary = 'primary',
	outlined = 'outlined'
}


interface CardProps {
	width?: string;
	height?: string;
	children: React.ReactNode;
	variant: CardVariant;
	onClick: (num: number) => void;
}



const Card: FC<CardProps> = ({ onClick, width, height, children, variant }) => {

	const [num, setNum] = useState(0);

	return (
		<div
			style={{
				width,
				height,
				background: variant === 'primary' ? 'gray' : 'none',
				outline: variant === 'outlined' ? '1px solid gray' : 'none'
			}}
			onClick={() => onClick(num)}
		>
			{children}
		</div>
	)
}

export default Card