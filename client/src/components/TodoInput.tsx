import { useState, useContext } from "react";
import style from "./styles/TodoInput.module.css";
import { ThemeContext } from "../services/providers/ThemeContext";

export default function TodoInput() {
	const [inputValue, setInputValue] = useState("");
	const themeContext = useContext(ThemeContext);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);
	};

	return (
		<div
			className={`${
				themeContext?.isLight
					? style.lightInputContainer
					: style.darkInputContainer
			} mb-4`}
		>
			<span
				className={themeContext?.isLight ? style.lightCircle : style.darkCircle}
			></span>
			<input
				type='text'
				className={themeContext?.isLight ? style.lightInput : style.darkInput}
				value={inputValue}
				onChange={handleChange}
				placeholder='Create a new todo...'
			/>
		</div>
	);
}
