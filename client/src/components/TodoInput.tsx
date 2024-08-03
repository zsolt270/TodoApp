import { useState } from "react";
import style from "./styles/TodoInput.module.css";

export default function TodoInput() {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);
	};

	return (
		<div className={style.darkInputContainer}>
			<span className={style.circle}></span>
			<input
				type='text'
				className={style.darkInput}
				value={inputValue}
				onChange={handleChange}
				placeholder='Create a new todo...'
			/>
		</div>
	);
}
