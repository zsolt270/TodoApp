import axios from "axios";
const port = import.meta.env.VITE_PORT;

export const getTodos = async (setTodos) => {
	await axios
		.get(`http://localhost:${port}/api/todos/`)
		.then((res) => {
			console.log(res.data);
			setTodos(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const createTodo = async (
	value: string,
	isCompleted: string,
	setTodos
) => {
	await axios
		.post(`http://localhost:${port}/api/todos/`, {
			text: value,
			isCompleted: isCompleted,
		})
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
	getTodos(setTodos);
};

export const updateUpdateToCompleted = async (
	id: string,
	isCompleted: string
) => {
	await axios
		.put(`http://localhost:${port}/api/todos/${id}`, {
			isCompleted: !isCompleted,
		})
		.then((res) => {
			console.log(!isCompleted);
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const deleteSingleTodo = async (id: string) => {
	await axios
		.delete(`http://localhost:${port}/api/todos/${id}`)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const deleteALLTodo = async () => {
	await axios
		.delete(`http://localhost:${port}/api/todos/`)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
};
