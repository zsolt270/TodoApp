import style from "./styles/Todo.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../services/providers/ThemeContext";

export default function Todo() {
	const themeContext = useContext(ThemeContext);
	return (
		<div className={themeContext?.isLight ? style.lightTodo : style.darkTodo}>
			<span
				className={themeContext?.isLight ? style.lightCircle : style.darkCircle}
			></span>
			<p className='mb-0'>valami</p>
		</div>
	);
}
