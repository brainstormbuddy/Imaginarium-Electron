import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="w-full h-[calc(100vh]">
      <div className="relative !w-full h-[calc(100vh)] bg-[url('/public/assets/img/background.png')] bg-center bg-cover bg-no-repeat">
        <img
          className="absolute top-6	left-6 !w-auto h-6"
          src="assets/img/Deviant Art.png"
          alt="Deviant Art"
        />
        <label className="absolute top-6 right-10 !w-37 h-5 font-extrabold text-[9px] tracking-[.21em] text-white opacity-50">
          ART BY @FANTASYLADY
        </label>

        <div className="absolute flex flex-col p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-auto bg-neutral-840 opacity-[.90] rounded-md">
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
              Create Your Account
            </label>
          </div>

          <div className="flex flex-row flex-start">
            <label className="mb-1 font-extrabold leading-5 text-[9px] text-white w-40 tracking-[.25em]">
              FIRST NAME
            </label>
            <label className=" mb-1 font-extrabold leading-5 text-[9px] text-white tracking-[.25em] w-36">
              LAST NAME
            </label>
          </div>

          <div className="flex justify-between">
            <input
              type="text"
              name="firstname"
              className="mb-2 px-3 py-2 bg-black  border-neutral-700	placeholder-slate-400 focus:outline-none focus:border-neutral-700 focus:ring-neutral-700 block w-36 rounded-md sm:text-sm focus:ring-1 text-white"
              placeholder="Julia"
            />

            <input
              type="text"
              name="lastname"
              className="mb-2 px-3 py-2 bg-black  border-neutral-700	placeholder-slate-400 focus:outline-none focus:border-neutral-700 focus:ring-neutral-700 block w-36 rounded-md sm:text-sm focus:ring-1 text-white"
              placeholder="Ellei"
            />
          </div>

          <label className=" mb-1 font-extrabold leading-5 text-[9px] text-white tracking-[.25em]">
            USERNAME
          </label>

          <input
            type="text"
            name="username"
            className="mb-2 px-3 py-2 bg-black  border-neutral-700	placeholder-slate-400 focus:outline-none focus:border-neutral-700 focus:ring-neutral-700 block w-full rounded-md sm:text-sm focus:ring-1 text-white"
            placeholder=" juliaellei"
          />

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
            <label className="flex flex-start mb-1 font-extrabold leading-5 text-[9px] text-white tracking-[.25em]">
              PASSWORD
            </label>

            <input
              type="password"
              name="password"
              className="mb-2 px-3 py-2 bg-black  border-neutral-700	placeholder-slate-400 focus:outline-none focus:border-neutral-700 focus:ring-neutral-700 block w-full rounded-md sm:text-sm focus:ring-1 text-white"
              placeholder="please enter your password"
            />
          </div>

          <div>
            <label className="flex flex-start mb-1 font-extrabold leading-5 text-[9px] text-white tracking-[.25em]">
              CONFIRM PASSWORD
            </label>

            <input
              type="password"
              name="password"
              className="mb-2 px-3 py-2 bg-black  border-neutral-700	placeholder-slate-400 focus:outline-none focus:border-neutral-700 focus:ring-neutral-700 block w-full rounded-md sm:text-sm focus:ring-1 text-white"
              placeholder="confirm your password"
            />
          </div>
          <div className="h-14 flex justify-center">
            <button className="mt-4 flex justify-center rounded-md px-[9px] py-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-[.25em] leading-5">
              REGISTER
            </button>
          </div>
          <Link
            className="flex justify-center mt-3 no-underline  bg-neutral-840 opacity-[.90] ring-offset-[1px] font-extrabold text-[10px] text-centerleading-5 text-[#1daeff] tracking-wide"
            to="/login"
          >
            LOG IN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
