import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/7e30a1c8-d525-4106-8911-04b8461d6201/US-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_00121511-337d-4096-a35a-410ac453bf78_large.jpg"></img>
      </div>
      <form className="w-3/12 bg-black absolute p-12 my-40 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-500"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-500"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-500"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <>
            <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
              <span className="font-extralight text-gray-200">
                New to Netflix?
              </span>{" "}
              Sign Up Now
            </p>{" "}
          </>
        ) : (
          <>
            <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
              <span className="font-extralight text-gray-200">
                Already registered?
              </span>{" "}
              Sign In Now
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
