/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./styles/TodoList.module.css";
import Todo from "./ui/Todo";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../services/providers/ThemeContext";
import { TodoType } from "../services/api/apiTypes";
import { usehandleFiltering } from "../hooks/useHandleFiltering";
import { deleteALLTodo } from "../services/api/requests";

type TodoListProps = {
	todosList: TodoType[];
	setTodos: (todo: TodoType[]) => void;
};

export default function TodoList({ todosList, setTodos }: TodoListProps) {
	const themeContext = useContext(ThemeContext);
	const [activeFilter, setActiveFilter] = useState<
		"all" | "active" | "completed"
	>("all");
	// const [filteredTodos, setFilteredTodos] = useState<TodoType[] | null>(null);
	const todoArray = Object.values(todosList)[0] as unknown as TodoType[];
	let TodoElements;
	let activeCount;
	// const handleFiltering = (filter: string) => {
	// 	usehandleFiltering({
	// 		filter,
	// 		setActiveFilter,
	// 		setFilteredTodos,
	// 		todoArray,
	// 	});
	// };

	const handleClearAll = () => {
		deleteALLTodo();
		setTodos({ todos: [] });
		// setFilteredTodos({ todos: [] });
	};
	try {
		activeCount = todoArray.filter((todo) => {
			return todo.isCompleted === false;
		});
		// if (!filteredTodos) {
		// 	console.log("nem filtertodos");
		// 	activeCount = todoArray.filter((todo) => {
		// 		return todo.isCompleted === false;
		// 	});
		TodoElements = todoArray.map((todo, index) => {
			return (
				<Todo
					key={index}
					todo={todo}
					setTodos={setTodos}
					todoArray={todoArray}
				/>
			);
		});
		// } else {
		// 	console.log("filtertodos");
		// 	activeCount = filteredTodos.filter((todo) => {
		// 		return todo.isCompleted === false;
		// 	});
		// 	TodoElements = filteredTodos.map((todo, index) => {
		// 		return (
		// 			<Todo
		// 				key={index}
		// 				todo={todo}
		// 				setTodos={setTodos}
		// 				todoArray={todoArray}
		// 				setFilteredTodos={setFilteredTodos}
		// 				activeFilter={activeFilter}
		// 			/>
		// 		);
		// 	});
		// }
	} catch (e) {
		console.log(e);
		console.log("todo making error");
	}

	return (
		<>
			<div
				className={`mb-4 mb-md-0 ${
					themeContext?.isLight ? style.lighttodoList : style.darktodoList
				}`}
			>
				{TodoElements}
				<div
					className={`d-none d-md-flex justify-content-between align-items-center ${
						themeContext?.isLight
							? style.lightTodoListLastRow
							: style.darkTodoListLastRow
					}`}
				>
					<p className='mb-0 fs-6 fw-bold'>{`${activeCount?.length} items left`}</p>
					<div className='d-flex justify-content-between gap-4'>
						<p
							className={`mb-0 fw-bold  ${
								themeContext?.isLight
									? style.lightLastRowHoverable
									: style.darkLastRowHoverable
							} ${activeFilter === "all" ? style.activeFilter : ""}`}
							onClick={() => {
								handleFiltering("all");
							}}
						>
							All
						</p>
						<p
							className={`mb-0 fw-bold ${
								themeContext?.isLight
									? style.lightLastRowHoverable
									: style.darkLastRowHoverable
							} ${activeFilter === "active" ? style.activeFilter : ""}`}
							onClick={() => {
								handleFiltering("active");
							}}
						>
							Active
						</p>
						<p
							className={`mb-0 fw-bold ${
								themeContext?.isLight
									? style.lightLastRowHoverable
									: style.darkLastRowHoverable
							} ${activeFilter === "completed" ? style.activeFilter : ""}`}
							onClick={() => {
								handleFiltering("completed");
							}}
						>
							Completed
						</p>
					</div>
					<p
						onClick={handleClearAll}
						className={`mb-0 fs-6 fw-bold ${
							themeContext?.isLight
								? style.lightLastRowHoverable
								: style.darkLastRowHoverable
						}`}
					>
						Clear Completed
					</p>
				</div>

				{/* mobile view */}
				<div
					className={` d-flex justify-content-between d-md-none ${
						themeContext?.isLight
							? style.lightTodoListLastRow
							: style.darkTodoListLastRow
					}`}
				>
					<p className='mb-0'>{`${activeCount?.length} items left`}</p>
					<p
						onClick={handleClearAll}
						className='mb-0'
					>
						Clear Completed
					</p>
				</div>
			</div>
			<div
				className={`d-flex justify-content-center gap-4 d-md-none  ${
					themeContext?.isLight
						? style.lastLightRowMobile
						: style.lastDarkRowMobile
				}`}
			>
				<p
					className={`mb-0 fw-bold ${
						activeFilter === "all" ? style.activeFilter : ""
					}`}
					onClick={() => {
						handleFiltering("all");
					}}
				>
					All
				</p>
				<p
					className={`mb-0 fw-bold ${
						activeFilter === "active" ? style.activeFilter : ""
					}`}
					onClick={() => {
						handleFiltering("active");
					}}
				>
					Active
				</p>
				<p
					className={`mb-0 fw-bold ${
						activeFilter === "completed" ? style.activeFilter : ""
					}`}
					onClick={() => {
						handleFiltering("completed");
					}}
				>
					Completed
				</p>
			</div>
			{/* mobile view */}
			{/* last controll row */}
		</>
	);
}
