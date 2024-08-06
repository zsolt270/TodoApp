import { TodoType } from "../services/api/apiTypes";
import { getTodos } from "../services/api/requests";
import { getFilteredTodos } from "../services/api/requests";

type FilterPropsType = {
	filter: "all" | "active" | "completed";
	setActiveFilter: (filter: "all" | "active" | "completed") => void;
	todoArray: TodoType[];
	setTodos: (filteredlist: TodoType[]) => void;
};

export const usehandleFiltering = async ({
	filter,
	setActiveFilter,
	todoArray,
	setTodos,
}: FilterPropsType) => {
	if (filter === "all") {
		getTodos(setTodos);
		setActiveFilter("all");
	} else if (filter === "active") {
		await getFilteredTodos(setTodos, "active");
		const filteredTodos = todoArray.filter((todo) => {
			return todo.isCompleted === false;
		});
		console.log(filteredTodos);

		setActiveFilter("active");
	} else {
		await getFilteredTodos(setTodos, "completed");
		const filteredTodos = todoArray.filter((todo) => {
			return todo.isCompleted === true;
		});
		console.log(filteredTodos);

		setActiveFilter("completed");
	}
};
