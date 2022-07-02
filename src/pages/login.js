import React from "react";
import { Link } from "react-router-dom";

import { GoogleLogin } from "react-google-login";
import AppleLogin from "react-apple-login";

import { AuthContext } from "./context/AuthContext";
import DeviartImage from "../components/pages/Onboard/DeviartImage";

function Login() {
  const { setIsAuthenticated } = React.useContext(AuthContext);

  const responseGoogle = (response) => {
    // console.log(response);
  };

  return (
    <div className="w-full h-[calc(100vh)]">
      <div className="relative !w-full h-[calc(100vh)] bg-[url('/public/assets/img/background.png')] bg-center bg-cover bg-no-repeat">
        <DeviartImage />
        <label className="absolute top-6 right-10 !w-37 h-5 font-extrabold text-[9px] tracking-[.21em] text-white opacity-50">
          ART BY @FANTASYLADY
        </label>

        <div className="absolute flex flex-col p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-[33rem] h-auto bg-neutral-840 opacity-[.95] rounded-md">
          <div className="flex flex-row justify-center items-center mb-10">
            <img
              className="ml-2 w-10 h-10"
              src="assets/img/Union1.png"
              alt="Union1"
            />
            <img
              className="ml-4 w-50 h-6 items-baseline"
              src="assets/img/imaginarium.png"
              alt="imaginarium"
            />
            <div className="ml-2 -mt-2 w-5 h-2 font-bold text-sm text-[#5F5F5F] ">
              1.0
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <label className="w-50 h-6 font-bold text-[18px] text-white leading-6">
              Sign into Your Account
            </label>
          </div>
          <div>
            <label className="flex flex-start mb-1 font-extrabold leading-5 text-[9px] text-white tracking-[.25em]">
              EMAIL
            </label>

            <input
              type="email"
              name="email"
              className="mb-2 px-3 py-2 bg-black  border-neutral-700	placeholder-slate-400 focus:outline-none focus:border-neutral-700 focus:ring-neutral-700 block w-full rounded-md sm:text-sm focus:ring-1 text-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <div className="flex flex-row justify-between items-center">
              <label className="flex flex-start mb-1 font-extrabold leading-5 text-[9px] text-white tracking-[.25em]">
                PASSWORD
              </label>

              <Link
                className="w-8 text-[10px] font-normal	text-[#1daeff] mb: 1 no-underline"
                to="/reset-email"
              >
                Forgot?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              className="mb-2 px-3 py-2 bg-black  border-neutral-700	placeholder-slate-400 focus:outline-none focus:border-neutral-700 focus:ring-neutral-700 block w-full rounded-md sm:text-sm focus:ring-1 text-white"
              placeholder="please enter your password"
            />
          </div>
          <div className="h-14 flex justify-center">
            <Link
              className="mt-4 flex justify-center rounded-md px-[9px] py-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-[.25em] leading-5"
              to="/dashboard"
              onClick={() => {
                setIsAuthenticated(true);
                localStorage.setItem("auth", true);
              }}
            >
              LOG IN
            </Link>
          </div>
          <div className="mt-10 mb-2">
            <GoogleLogin
              clientId="299862850495-2gkvdsg2qhda3k1akosvnijj2rqfrvre.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="flex items-center w-full h-8 bg-white cursor-pointer rounded-md"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img
                    className="p-1.5"
                    src="assets/img/Google.png"
                    alt="google"
                  />
                  <div className="m-auto  font-extrabold text-[10px] text-center leading-5 text-[#010101] tracking-[.25em]">
                    LOG IN WITH GOOGLE
                  </div>
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <div className="mb:3">
            <AppleLogin
              // clientId="299862850495-2gkvdsg2qhda3k1akosvnijj2rqfrvre.apps.googleusercontent.com"
              clientId="com.react.apple.login"
              render={(renderProps) => (
                <button
                  className="flex items-center w-full h-8 bg-black  rounded-md"
                  // onClick={renderProps.onClick}
                  // disabled={renderProps.disabled}
                >
                  <img
                    className="p-1.5"
                    src="assets/img/Apple.png"
                    alt="google"
                  />
                  <div className="m-auto font-extrabold text-[10px] text-center leading-5 text-[#cdcdcd] tracking-[.25em]">
                    LOG IN WITH APPLE
                  </div>
                </button>
              )}
              // redirectURI="https://redirectUrl.com"
            />
          </div>
          <Link
            className="flex justify-center mt-3 no-underline bg-neutral-840 opacity-[.90] ring-offset-[1px] font-extrabold text-[10px] text-centerleading-5 text-[#1daeff] tracking-wide"
            to="/register"
          >
            CREATE ACCOUNT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
