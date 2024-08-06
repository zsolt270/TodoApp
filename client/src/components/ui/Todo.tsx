/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./styles/Todo.module.css";
import check from "../../assets/icon-check.svg";
import cross from "../../assets/icon-cross.svg";
import { useContext } from "react";
import { ThemeContext } from "../../services/providers/ThemeContext";
import { updateUpdateToCompleted } from "../../services/api/requests";
import { deleteSingleTodo } from "../../services/api/requests";
import { TodoType } from "../../services/api/apiTypes";

type TodoPropsType = {
	todo: any;
	setTodos: (todo: TodoType[]) => void;
	todoArray: any;
	activeFilter: "all" | "active" | "completed";
	setActiveFilter: (todo: "all" | "active" | "completed") => void;
};

export default function Todo({
	todo,
	setTodos,
	todoArray,
	activeFilter,
}: TodoPropsType) {
	const themeContext = useContext(ThemeContext);
	const handleCheck = async () => {
		console.log(activeFilter);
		await updateUpdateToCompleted(todo._id, todo.isCompleted);
		const changedTodoArray = todoArray
			.map((td) => {
				if (td._id == todo._id) {
					return { ...td, isCompleted: !td.isCompleted };
				} else {
					return td;
				}
			})
			.filter((todo) => {
				if (activeFilter == "active") {
					return todo.isCompleted == false;
				} else if (activeFilter == "completed") {
					return todo.isCompleted == true;
				} else {
					return todo;
				}
			});
		console.log(changedTodoArray);
		setTodos({ todos: changedTodoArray });
	};

	const handleSingleDelete = () => {
		deleteSingleTodo(todo._id);
		const remainingTodos = todoArray.filter((td) => {
			return td._id !== todo._id;
		});
		setTodos({ todos: remainingTodos });
	};

	return (
		<div className={themeContext?.isLight ? style.lightTodo : style.darkTodo}>
			<span
				className={`${
					themeContext?.isLight ? style.lightCircle : style.darkCircle
				} ${todo.isCompleted ? style.checkedCircle : ""} `}
				onClick={handleCheck}
			>
				{todo.isCompleted ? (
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
					{todo.isCompleted ? (
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
