import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
      const movies = useSelector((store) => store.movies);
      return (<div className=" bg-black">
            <div className="mt-0 md:-mt-52 relative z-20 pl-4 md:pl-12">
            <MovieList title={"Now Playing"} movieList={movies.nowPlayingMovies} />
            <MovieList title={"Popular"} movieList={movies.popularMovies} />
            <MovieList title={"Top Rated"} movieList={movies.topRatedMovies} />
            <MovieList title={"Upcoming Movies"} movieList={movies.upcomingMovies} />
                  </div>
      </div>);
};

export default SecondaryContainer;