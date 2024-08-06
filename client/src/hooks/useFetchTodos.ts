/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { TodoType } from "../services/api/apiTypes.ts";
import { getTodos } from "../services/api/requests.ts";

export const useFetchTodos = () => {
	const [todos, setTodos] = useState<TodoType[]>([]);

	useEffect(() => {
		getTodos(setTodos);
	}, []);
	return { todos, setTodos };
};
