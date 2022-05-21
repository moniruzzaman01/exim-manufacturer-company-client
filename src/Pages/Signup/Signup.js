import React, { useEffect } from "react";
import SocialSignup from "../../Components/SocialSignup";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [authUser] = useAuthState(auth);
  const [createUserWithEmailAndPass, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const handleForm = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;

    await createUserWithEmailAndPass(email, pass);
    await updateProfile({ displayName: name });
  };

  useEffect(() => {
    if (user || authUser) {
      navigate("/");
    }
  }, [authUser, user, navigate]);

  return (
    <div className="flex justify-center">
      <div className=" absolute top-20 w-full max-w-lg">
        <h2 className=" text-4xl text-primary text-center my-10">Signup</h2>
        <form onSubmit={handleForm}>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Your Name:</span>
            </label>
            <input
              required
              type="text"
              name="name"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
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
              name="pass"
              type="password"
              className="input input-bordered input-primary w-full max-w-lg mb-10"
            />
          </div>
          {error && (
            <p className=" mb-5 mt-[-25px] text-red-500">{error.message}</p>
          )}
          <button className={` btn btn-primary w-full ${loading && "loading"}`}>
            {loading ? "" : "sign up"}
          </button>
        </form>
        <SocialSignup />
      </div>
    </div>
  );
};

export default Signup;
