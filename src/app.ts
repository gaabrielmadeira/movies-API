import "express-async-errors";
import express, { Application } from "express";
import { moviesRouter } from "./routers";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app: Application = express();
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use(handleErrors);

export default app;