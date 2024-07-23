import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
      const movies = useSelector((store) => store.movies);
      return (<div className=" bg-black">
            <div className="-mt-52 relative z-20 pl-12">
            <MovieList title={"Now Playing"} movieList={movies.nowPlayingMovies} />
            <MovieList title={"Popular"} movieList={movies.popularMovies} />
            <MovieList title={"TV Shows"} movieList={movies.nowPlayingMovies} />
                  <MovieList title={"Now Playing"} movieList={movies.nowPlayingMovies} />
                  </div>
      </div>);
};

export default SecondaryContainer;