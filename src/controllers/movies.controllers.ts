import Movie from "../entities/movies.entity";
import { Pagination, moviesRead } from "../interfaces";
import { moviesServices } from "../services";
import { Request, Response } from "express";

const create = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await moviesServices.create(req.body);
  return res.status(201).json(movie);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const { pagination } = res.locals;
  const movies: Pagination = await moviesServices.read(pagination);

  return res.status(200).json(movies);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await moviesServices.destroy(res.locals.foundMovie);

  return res.status(204).json();
};

const partialUpdate = async (req: Request, res: Response): Promise<Response> => {
  const { foundMovie } = res.locals;
  const { body } = req;

  const movie: Movie = await moviesServices.partialUpdate(foundMovie, body);

  return res.status(200).json(movie);
};

export default { create, read, destroy, partialUpdate };