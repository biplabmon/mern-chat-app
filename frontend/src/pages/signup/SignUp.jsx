import React, { useState } from "react";
import GenerateCheckbox from "./GenerateCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signup, loading } = useSignup();

  const handelCheckboxChange = (gender) => {
    setInput({ ...input, gender });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    await signup(input);
  };

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handelSubmit}>
          <div className="">
            <label className="label p-2">
              <span className=" text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full h-10"
              value={input.fullName}
              onChange={(e) => setInput({ ...input, fullName: e.target.value })}
            />
          </div>

          <div className="">
            <label className="label p-2">
              <span className=" text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full h-10"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
          </div>

          <div className="">
            <label className="label p-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full h-10"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>

          <div className="">
            <label className="label p-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered w-full h-10"
              value={input.confirmPassword}
              onChange={(e) =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenerateCheckbox
            onCheckboxChange={handelCheckboxChange}
            selectGender={input.gender}
          />

          <Link
            to="/login"
            className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div className="">
            <button className=" btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className=" loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
