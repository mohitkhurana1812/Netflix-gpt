import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
      const gpt = useSelector(store => store.gpt);
      const { movieResults, movieNames } = gpt;
      debugger;
      if (!movieNames) return null;
      return (<div className="m-4 p-4 bg-black text-white opacity-85">
            <div>
                  {movieNames.map((movieName, index) => (
                        <MovieList key={movieName} title={movieName} movieList={{ results : movieResults[index]}}/>
                  ))}
            </div>
      </div>);
}
export default GptMovieSuggestions;