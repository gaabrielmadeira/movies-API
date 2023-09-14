import { Movie } from "../entities";
import { Pagination, PaginationParams, moviesCreate, moviesRead, moviesUpdate } from "../interfaces";
import { MoviesRepo } from "../repositories";

const create = async (payload: moviesCreate): Promise<Movie> => {
  const movieCreate: Movie = MoviesRepo.create(payload);
  return await MoviesRepo.save(movieCreate);
};

const read = async ({
  page,
  perPage,
  nextPage,
  prevPage,
  sort,
  order
}: PaginationParams): Promise<Pagination> => {
  const [movies, count]: Array<moviesRead | number> = 
    await MoviesRepo.findAndCount({
      order: {[sort]: order},
      skip: page, 
      take: perPage
    });
    
  return{
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
};

const destroy = async (movie: Movie): Promise<void> => {
  await MoviesRepo.remove(movie);
};

const partialUpdate = async (movie: Movie, payload: moviesUpdate): Promise<Movie> => {
  return await MoviesRepo.save({ ...movie, ...payload });
};

export default { create, read, destroy, partialUpdate };