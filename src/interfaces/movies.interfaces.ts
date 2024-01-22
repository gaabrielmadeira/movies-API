import { z } from "zod";
import { movieCreateSchema } from "../schemas";
import { Movie } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type moviesCreate = z.infer<typeof movieCreateSchema>;
type moviesRead = Array<Movie>;
type moviesUpdate = DeepPartial<Movie>;
type moviesRepo = Repository<Movie>;

export {
  moviesCreate,
  moviesRead,
  moviesUpdate,
  moviesRepo
};