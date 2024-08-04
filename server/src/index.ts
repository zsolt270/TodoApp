import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middleware/ErrorHandler";
import router from "./routes/todosRoute";
import connectDB from "./Model/connectDB";
const cors = require("cors");

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/todos", router);

app.use("*", (req, res) => {
	res.json({ message: "Route was not found" });
});
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`The server is running on ${PORT}`);
});
