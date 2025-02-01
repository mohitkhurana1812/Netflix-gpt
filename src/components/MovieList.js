import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movieList }) => {
  debugger;
  return (
    <div>
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieList?.results?.map((movie) => (
            <Link to={`/browse/watch/${movie.id}`}>
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
