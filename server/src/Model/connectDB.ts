import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(
			process.env.CONNECTION_STRING as string
		);
		console.log("Database connection was successfull");
	} catch (err) {
		console.log(err);
		console.log("Database connection failed");
	}
};
export default connectDB;
