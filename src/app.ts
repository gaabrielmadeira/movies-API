import "express-async-errors";
import express, { Application } from "express";
import { moviesRouter } from "./routers";
import { handleErrors } from "./middlewares/handleErrors.middleware";

const app: Application = express();
app.use(express.json());

app.use("/movies", moviesRouter);

app.use(handleErrors);

export default app;