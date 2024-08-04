import { TodoType } from "../services/api/apiTypes";

type FilterPropsType = {
	filter: string;
	setActiveFilter: (filter: string) => void;
	setFilteredTodos: (filteredlist: TodoType[]) => void;
	todoArray: TodoType[];
};

export const usehandleFiltering = ({
	filter,
	setActiveFilter,
	setFilteredTodos,
	todoArray,
}: FilterPropsType) => {
	setActiveFilter(filter);
	let filteredlist;
	if (filter === "all") {
		filteredlist = todoArray.map((todo) => {
			return todo;
		});
		setFilteredTodos(filteredlist);
	} else if (filter === "active") {
		filteredlist = todoArray.filter((todo) => {
			return todo.isCompleted === false;
		});
		setFilteredTodos(filteredlist);
	} else if (filter === "completed") {
		filteredlist = todoArray.filter((todo) => {
			return todo.isCompleted === true;
		});
		setFilteredTodos(filteredlist);
	}
};
