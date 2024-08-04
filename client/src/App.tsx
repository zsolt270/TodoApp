/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "./components/Banner";
import Main from "./components/Main";
import { useFetchTodos } from "./hooks/useFetchTodos";
import { TodoType } from "./services/api/apiTypes.ts";

function App() {
	const { todos, setTodos }: TodoType[] | any = useFetchTodos();
	console.log(todos);
	return (
		<div className='container-fluid px-0 '>
			<Banner />
			<Main
				todos={todos}
				setTodos={setTodos}
			/>
		</div>
	);
}

export default App;
