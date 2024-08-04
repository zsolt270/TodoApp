import style from "./styles/Main.module.css";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import { useContext } from "react";
import { ThemeContext } from "../services/providers/ThemeContext";
import { TodoType } from "../services/api/apiTypes";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

type MainProps = {
	todos: TodoType[];
	setTodos: () => void;
};

export default function Main({ todos, setTodos }: MainProps) {
	const themeContext = useContext(ThemeContext);
	return (
		<div className={themeContext?.isLight ? style.bgLight : style.bgDark}>
			<div className={style.todoContainer}>
				<div className='row align-items-center mb-5'>
					<div className='col '>
						<h1 className={`fw-bold mb-0 display-4 pt-3 ${style.TodoTitle}`}>
							TODO
						</h1>
					</div>
					<div className='col text-end'>
						<img
							src={themeContext?.isLight ? moon : sun}
							alt=''
							className={style.themeToggler}
							onClick={() => {
								themeContext?.setIsLight(!themeContext.isLight);
							}}
						/>
					</div>
				</div>
				<TodoInput />
				<TodoList
					todosList={todos}
					setTodos={setTodos}
				/>
				<p className='mt-5 fs-6 fw-bold text-secondary text-center me-0 me-md-5'>
					Drag and drop to reorder list
				</p>
			</div>
		</div>
	);
}
