/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { TodoType } from "../services/api/apiTypes.ts";

export const useFetchTodos = () => {
	const [todos, setTodos] = useState<TodoType[]>([]);

	useEffect(() => {
		const fetchTodos = async () => {
			await axios
				.get("http://localhost:5001/api/todos/")
				.then((res) => {
					setTodos(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fetchTodos();
	}, []);
	return { todos, setTodos };
};
