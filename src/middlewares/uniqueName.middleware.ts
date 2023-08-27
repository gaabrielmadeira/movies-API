import { NextFunction, Request, Response } from "express";
import { Movie } from "../entities";
import { MoviesRepo } from "../repositories";
import { AppError } from "../errors";

const uniqueName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { name } = req.body;

  if(!name) return next();

  const foundName: Movie | null = await MoviesRepo.findOneBy({
    name: name,
  });

  if(foundName){
    throw new AppError("Movie already exists.", 409)
  }

  return next();
};

export default uniqueName;