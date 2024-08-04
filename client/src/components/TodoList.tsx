/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./styles/TodoList.module.css";
import Todo from "./ui/Todo";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../services/providers/ThemeContext";
import { TodoType } from "../services/api/apiTypes";
// import useFilterTodos from "../hooks/useFilterTodos";

type TodoListProps = {
	todosList: TodoType[];
	setTodos: () => void;
};

export default function TodoList({ todosList, setTodos }: TodoListProps) {
	const themeContext = useContext(ThemeContext);
	const [activeFilter, setActiveFilter] = useState("all");

	// ide még egy statet majd a todoknak amik jönnek a fetchel
	//aztán pedig function és abba a todo state filterelést

	let TodoElements;
	try {
		const todoArray = Object.values(todosList)[0] as unknown as TodoType[];
		TodoElements = todoArray.map((todo, index) => {
			return (
				<Todo
					key={index}
					todo={todo}
				/>
			);
		});
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
					<p className='mb-0 fs-6 fw-bold'>x items left</p>
					<div className='d-flex justify-content-between gap-4'>
						<p
							className={`mb-0 fw-bold  ${
								themeContext?.isLight
									? style.lightLastRowHoverable
									: style.darkLastRowHoverable
							} ${activeFilter === "all" ? style.activeFilter : ""}`}
							onClick={() => {
								setActiveFilter("all");
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
								setActiveFilter("active");
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
								setActiveFilter("completed");
							}}
						>
							Completed
						</p>
					</div>
					<p
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
					<p className='mb-0'>x items left</p>
					<p className='mb-0'>Clear Completed</p>
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
						setActiveFilter("all");
					}}
				>
					All
				</p>
				<p
					className={`mb-0 fw-bold ${
						activeFilter === "active" ? style.activeFilter : ""
					}`}
					onClick={() => {
						setActiveFilter("active");
					}}
				>
					Active
				</p>
				<p
					className={`mb-0 fw-bold ${
						activeFilter === "completed" ? style.activeFilter : ""
					}`}
					onClick={() => {
						setActiveFilter("completed");
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
