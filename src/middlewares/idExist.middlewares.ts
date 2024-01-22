import { Response, Request, NextFunction } from "express";
import { Movie } from "../entities";
import { MoviesRepo } from "../repositories";
import { AppError } from "../errors";

const idExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const foundMovie: Movie | null = await MoviesRepo.findOneBy({
    id: Number(req.params.id),
  });

  if (!foundMovie) throw new AppError("Movie not found", 404);

  res.locals = {...res.locals, foundMovie};

  return next();
};

export default idExist;