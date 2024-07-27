import { useState, FC, useRef } from "react";




const EventExmpl: FC = () => {
	const [value, setValue] = useState('');
	const [isDrag, setIsDrag] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);


	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}

	const clickHandler = (e: React.MouseEvent) => {
		console.log(inputRef.current?.value);
	};

	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('DRAG')
	};

	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		console.log('DROP');
		setIsDrag(false);
	}

	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('LEAVE');
		setIsDrag(false)
	}

	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		console.log('DRAGOVER', isDrag);
		setIsDrag(true)
	}


	return (
		<>
			<button onClick={clickHandler}>button</button>
			<input type="text" value={value} onChange={changeHandler} placeholder="управляемый" />
			<input type="text" ref={inputRef} placeholder="неуправляемый" />


			<div onDrag={dragHandler} draggable style={{ width: 200, height: 200, backgroundColor: 'red' }}></div>
			<div
				style={{ width: 200, height: 200, backgroundColor: !isDrag ? 'red' : 'blue', marginTop: 20 }}
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
			>
				DROP
			</div>
		</>
	)
};

export default EventExmpl;