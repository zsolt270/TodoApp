import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middleware/ErrorHandler";
import router from "./routes/todosRoute";
import connectDB from "./Model/connectDB";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// route és minden más route
app.use("/api/todos", router);
// route és minden más route

app.use("*", (req, res) => {
	res.json({ message: "Route was not found" });
});
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`The server is running on ${PORT}`);
});
