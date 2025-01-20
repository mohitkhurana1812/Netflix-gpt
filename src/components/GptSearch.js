import { IMG_BACKGROUND_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={IMG_BACKGROUND_URL}
        ></img>
      </div>
      <div>
        {" "}
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GptSearch;
