import MovieCard from "./MovieCard";
const MovieList = ({ title, movieList }) => {
  console.log(movieList);
  debugger;
  return (
    <div>
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieList?.results.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
