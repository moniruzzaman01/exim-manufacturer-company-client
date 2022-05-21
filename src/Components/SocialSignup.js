import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const SocialSignup = () => {
  const [gooleSignIn, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = () => {
    gooleSignIn();
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <>
      <div className="flex flex-col w-1/2 mx-auto my-5 border-opacity-50">
        <div className="divider">OR</div>
      </div>

      {error && (
        <p className=" mb-5 mt-[-25px] text-red-500">{error.message}</p>
      )}
      <button
        onClick={handleSignIn}
        className={` btn btn-outline btn-error ${loading && "loading"}  w-full`}
      >
        {loading ? "" : "Google Signup"}
      </button>
    </>
  );
};

export default SocialSignup;
