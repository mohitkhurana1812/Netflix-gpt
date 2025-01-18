import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { model } from "../utils/openAI";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

 // search movie in TMDB
 const searchMovieTMDB = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
    "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
    
  );
  const json = await data.json();

  return json.results;
};

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    debugger;
    const prompt =
      "Act as a Movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated.";
    const gptResults = await model.generateContent(prompt);

    const gptMovies = gptResults?.response.text().trim().split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmndbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmndbResults }));
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        ></input>
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
