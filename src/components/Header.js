import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { HOME, LOGO, SUPPORTED_LANGUAGES, USER_AVATAR, gptSearch } from "../utils/constants";
import { addGptMovieResult, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        //navigate("/Error Page");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    dispatch(changeLanguage("en"));
    dispatch(addGptMovieResult({}));
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className=" w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-2 my-2 bg-purple-800 rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? HOME : gptSearch}
          </button>
          <img className="w-12 h-12" src={USER_AVATAR} alt="user-icon" />
          <button
            onClick={handleSignOut}
            className="rounded-md text-white font-bold px-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
