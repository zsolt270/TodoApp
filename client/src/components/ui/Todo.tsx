/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./styles/Todo.module.css";
import check from "../../assets/icon-check.svg";
import cross from "../../assets/icon-cross.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../../services/providers/ThemeContext";

export default function Todo({ todo }) {
	const themeContext = useContext(ThemeContext);
	const [isChecked, setIsChecked] = useState(false);
	const handleCheck = () => {
		setIsChecked(!isChecked);
		//ide akkor még majd az update request fetchet, hogy changelje completedre
	};

	return (
		<div className={themeContext?.isLight ? style.lightTodo : style.darkTodo}>
			<span
				className={`${
					themeContext?.isLight ? style.lightCircle : style.darkCircle
				} ${isChecked && style.checkedCircle} `}
				onClick={handleCheck}
			>
				{isChecked && (
					<img
						className={`fs-2 ${style.checker}`}
						src={check}
						alt='check icon'
					/>
				)}
			</span>
			<div className='d-flex justify-content-between align-items-center w-100'>
				<p className='mb-0 text-break'>
					{isChecked ? (
						<del className='text-secondary'>{todo.text}</del>
					) : (
						`${todo.text}`
					)}
				</p>
				<img
					className={`d-md-none ${style.todoDeleter}`}
					src={cross}
					alt='X for deleting todo'
				/>
			</div>
		</div>
	);
}
