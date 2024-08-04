import style from "./styles/TodoList.module.css";
import Todo from "./ui/Todo";
import { useContext } from "react";
import { ThemeContext } from "../services/providers/ThemeContext";

export default function TodoList() {
	const themeContext = useContext(ThemeContext);

	return (
		<>
			<div
				className={
					themeContext?.isLight ? style.lighttodoList : style.darktodoList
				}
			>
				<Todo />
				<Todo />
				<Todo />

				{/* last controll row */}
				<div
					className={`d-none d-md-flex justify-content-between gap-2 ${
						themeContext?.isLight
							? style.lightTodoListLastRow
							: style.darkTodoListLastRow
					}`}
				>
					<p className='mb-0'>x items left</p>
					<div className='d-flex gap-2'>
						<p className='mb-0'>All</p>
						<p className='mb-0'>Active</p>
						<p className='mb-0'>Completed</p>
					</div>
					<p className='mb-0'>Clear Completed</p>
				</div>

				{/* mobile view */}
				<div className=' d-flex justify-content-between mb-4 d-md-none'>
					<p className='mb-0'>x items left</p>
					<p className='mb-0'>Clear Completed</p>
				</div>
			</div>
			<div className='d-flex justify-content-center gap-4 d-md-none'>
				<p className='mb-0'>All</p>
				<p className='mb-0'>Active</p>
				<p className='mb-0'>Completed</p>
			</div>
			{/* mobile view */}
			{/* last controll row */}
		</>
	);
}
