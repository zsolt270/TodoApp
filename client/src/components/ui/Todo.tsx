/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./styles/Todo.module.css";
import check from "../../assets/icon-check.svg";
import cross from "../../assets/icon-cross.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../../services/providers/ThemeContext";
import { updateUpdateToCompleted } from "../../services/api/requests";
import { deleteSingleTodo } from "../../services/api/requests";
import { TodoType } from "../../services/api/apiTypes";

type TodoPropsType = {
	todo: any;
	setTodos: (todo: TodoType[]) => void;
	todoArray: any;
	setFilteredTodos?: (value: React.SetStateAction<TodoType[] | null>) => void;
	activeFilter?: "all" | "active" | "completed";
};

export default function Todo({
	todo,
	setTodos,
	todoArray,
	setFilteredTodos,
	activeFilter,
}: TodoPropsType) {
	const themeContext = useContext(ThemeContext);
	const [isChecked, setIsChecked] = useState(false);

	const handleCheck = () => {
		setIsChecked(!isChecked);
		updateUpdateToCompleted(todo._id, isChecked as unknown as string);
		// itt lehet a settodost direktbe változtatni
		// megkeresni a todo._id-t filterrel és akkor azét setTodo(...todo(vagy valami), isComplete: isChecked)
		// setTodos()
	};

	const handleSingleDelete = () => {
		deleteSingleTodo(todo._id);
		// ez akkor ha nem volt filterelve
		const valami = todoArray.filter((td) => {
			return td._id !== todo._id;
		});
		setTodos(valami);
		// ez akkor ha nem volt filterelve end

		//ha rányoktak a filterekre
		if (activeFilter == "all") {
			setFilteredTodos(
				todoArray.filter((td) => {
					return td._id !== todo._id;
				})
			);
		} else if (activeFilter == "active") {
			setFilteredTodos(
				todoArray.filter((td) => {
					return td._id !== todo._id && !td.isComplete;
				})
			);
		} else {
			setFilteredTodos(
				todoArray.filter((td) => {
					return td._id !== todo._id && td.isComplete;
				})
			);
		}
		//ha rányoktak a filterekre end
	};

	return (
		<div className={themeContext?.isLight ? style.lightTodo : style.darkTodo}>
			<span
				className={`${
					themeContext?.isLight ? style.lightCircle : style.darkCircle
				} ${isChecked || todo.isCompleted ? style.checkedCircle : ""} `}
				onClick={handleCheck}
			>
				{isChecked || todo.isCompleted ? (
					<img
						className={`fs-2 ${style.checker}`}
						src={check}
						alt='check icon'
					/>
				) : (
					""
				)}
			</span>
			<div className='d-flex justify-content-between align-items-center w-100'>
				<p className='mb-0 text-break'>
					{isChecked || todo.isCompleted ? (
						<del className='text-secondary'>{todo.text}</del>
					) : (
						`${todo.text}`
					)}
				</p>
				<img
					onClick={handleSingleDelete}
					className={`d-md-none ${style.todoDeleter}`}
					src={cross}
					alt={`X for deleting todo`}
				/>
			</div>
		</div>
	);
}
