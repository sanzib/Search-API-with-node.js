import express from "express";
import cors from "cors";
import connectDB from "./db/dbConnect.js";
import * as dotenv from "dotenv";
import router from "./routes/movieRoute.js";
dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api", router);
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on a server port no. ${port}`));
