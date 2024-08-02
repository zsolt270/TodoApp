import mongoose from "mongoose";

const TodosSchema = new mongoose.Schema(
	{
		text: { type: String, required: [true, "Please add a Todo"] },
		isCompleted: { type: Boolean, required: [true, "Please add a status"] },
	},
	{
		timestamps: true,
	}
);

const Todos = mongoose.model("Todos", TodosSchema);

export default Todos;
