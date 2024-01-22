import { AppDataSource } from './data-source';
import { Movie} from './entities';
import { moviesRepo } from './interfaces';

const MoviesRepo: moviesRepo = AppDataSource.getRepository(Movie);

export { MoviesRepo };