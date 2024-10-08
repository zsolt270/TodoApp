import { Request, Response } from "express";
import Todos from "../Model/todosModel";

export default class TodosController {
	async getTodos(req: Request, res: Response) {
		const todos = await Todos.find();
		res.json({ todos });
	}

	async createTodo(req: Request, res: Response) {
		console.log(req.body);
		const { text, isCompleted } = req.body;

		if (!text || !isCompleted) {
			res.status(400);
			throw new Error("All fields are mandatory");
		}
		console.log("after the cheeck");
		const createdTodo = await Todos.create({ text, isCompleted });
		res.json({ createdTodo });
	}
	async updateTodo(req: Request<{ id: number }, {}, {}, {}>, res: Response) {
		const updatedTodo = await Todos.findByIdAndUpdate(req.params.id, req.body);

		if (!updatedTodo) {
			res.status(404);
			throw new Error("The Todo couldnt be found");
		} else {
			console.log(updatedTodo);
		}
		res.json({ message: "The update was successfull!" });
	}
	async deleteTodo(req: Request<{ id: number }, {}, {}, {}>, res: Response) {
		const deletedTodo = await Todos.findByIdAndDelete(req.params.id);
		if (!deletedTodo) {
			res.status(404);
			throw new Error("The Todo couldnt be found");
		}
		res.json({ message: "The deletion was successfull!" });
	}
	async deleteAllTodos(req: Request, res: Response) {
		const deleted = await Todos.deleteMany();
		if (!deleted) {
			res.status(404);
			throw new Error("No todos found!");
		}
		res.json({ message: "The deletion was successfull!" });
	}
}
