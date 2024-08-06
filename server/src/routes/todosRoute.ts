import { Router } from "express";
import TodosController from "../controllers/todosController";
const asyncHandler = require("express-async-handler");

const router = Router();
const controller = new TodosController();

//get all the todos
router.get("/", asyncHandler(controller.getTodos));

//post a todo
router.post("/", asyncHandler(controller.createTodo));

//update a todo
router.put("/:id", asyncHandler(controller.updateTodo));

//delete a todo
router.delete("/:id", asyncHandler(controller.deleteTodo));

//delete all of the todos
router.delete("/", asyncHandler(controller.deleteAllTodos));

export default router;
