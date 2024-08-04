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
	value: string,
	isCompleted: string
) => {
	await axios
		.put("http://localhost:5001/api/todos/", {
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
