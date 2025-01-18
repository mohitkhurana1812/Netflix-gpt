import { IMG_BACKGROUND_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
      return (<><div className="fixed -z-10">
      <img src={IMG_BACKGROUND_URL}></img>
      </div>
            <GptSearchBar />
            <GptMovieSuggestions/>
      </>);

}
export default GptSearch;