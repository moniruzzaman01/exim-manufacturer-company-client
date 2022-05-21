import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SocialSignup from "../../Components/SocialSignup";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [authUser] = useAuthState(auth);
  const [emailAndPassLogin, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleForm = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;

    await emailAndPassLogin(email, pass);
  };
  useEffect(() => {
    if (user || authUser) {
      navigate(from, { replace: true });
    }
  }, [authUser, user, from, navigate]);

  return (
    <div className="flex justify-center">
      <div className=" absolute top-20 w-full max-w-lg">
        <h2 className=" text-4xl text-primary text-center my-10">Login</h2>
        <form onSubmit={handleForm}>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Your Email:</span>
            </label>
            <input
              required
              type="email"
              name="email"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Password:</span>
            </label>
            <input
              required
              type="password"
              name="pass"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          {error && (
            <p className=" mb-5 mt-[-25px] text-red-500">{error.message}</p>
          )}
          <button
            className={` btn btn-primary mt-10 w-full ${loading && "loading"}`}
          >
            {loading ? "" : "sign up"}
          </button>
        </form>
        <SocialSignup />
      </div>
    </div>
  );
};

export default Login;
