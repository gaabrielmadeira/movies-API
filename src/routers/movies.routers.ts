import { Router } from "express";
import moviesControllers from "../controllers/movies.controllers";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";
import { idExist, pagination, uniqueName, validateBody } from "../middlewares";

const moviesRouter: Router = Router();

moviesRouter.post("", 
validateBody(movieCreateSchema),
uniqueName, 
moviesControllers.create
);

moviesRouter.get("", pagination, moviesControllers.read);

moviesRouter.use("/:id", idExist);

moviesRouter.patch("/:id", 
validateBody(movieUpdateSchema),
uniqueName,
moviesControllers.partialUpdate
);

moviesRouter.delete("/:id", moviesControllers.destroy);

export default moviesRouter;