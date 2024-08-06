/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { TodoType } from "../services/api/apiTypes.ts";
const port = import.meta.env.VITE_PORT;

export const useFetchTodos = () => {
	const [todos, setTodos] = useState<TodoType[]>([]);

	useEffect(() => {
		const fetchTodos = async () => {
			await axios
				.get(`http://localhost:${port}/api/todos/`)
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
