import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Button from "../../component/Button/Button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const Login2 = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
        console.log(auth);
      })
      .catch((err) => seterror(err));
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto gap-2 py-4 w-[30vw]">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full text-center text-xl font-medium max-w-[100px]">
            Abc
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error ? (
          <p className="text-red-600 mt-8 text-center">{error}</p>
        ) : null}
        <form onSubmit={Login2} className="mt-8 flex justify-start">
          <div className="space-y-5 gap-2 w-full">
            <input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              className="rounded p-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              className="rounded p-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
