import style from "./styles/TodoInput.module.css";
import { useState, useContext } from "react";
import { ThemeContext } from "../services/providers/ThemeContext";
import { createTodo } from "../services/api/requests";
import { TodoType } from "../services/api/apiTypes";
// import { getTodos } from "../services/api/requests.ts";

type TodoInputProps = {
	todosList: TodoType[];
	setTodos: (todo: TodoType[]) => void;
};
// todosList,
export default function TodoInput({ setTodos }: TodoInputProps) {
	const [inputValue, setInputValue] = useState("");
	const themeContext = useContext(ThemeContext);
	// const todoArray = Object.values(todosList)[0] as unknown as TodoType[];
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createTodo(inputValue, "false", setTodos);
		// ide settodoval kéne és akkor nem kell refreshelni a paget
		// setTodos({
		// 	todos: [{ text: inputValue, isCompleted: false }, ...todoArray],
		// });
		setInputValue("");
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
			<form
				className='w-100'
				onSubmit={handleSubmit}
			>
				<input
					type='text'
					className={themeContext?.isLight ? style.lightInput : style.darkInput}
					value={inputValue}
					onChange={handleChange}
					placeholder='Create a new todo...'
				/>
			</form>
		</div>
	);
}
