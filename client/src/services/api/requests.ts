import axios from "axios";

export const createTodo = async (value: string, isCompleted: string) => {
	await axios
		.post("http://localhost:5001/api/todos/", {
			text: value,
			isCompleted: isCompleted,
		})
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const updateUpdateToCompleted = async (
	id: string,
	isCompleted: string
) => {
	await axios
		.put(`http://localhost:5001/api/todos/${id}`, {
			isCompleted: isCompleted,
		})
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const deleteSingleTodo = async (id: string) => {
	await axios
		.delete(`http://localhost:5001/api/todos/${id}`)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const deleteALLTodo = async () => {
	await axios
		.delete(`http://localhost:5001/api/todos/`)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
};
