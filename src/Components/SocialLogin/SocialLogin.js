import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorMessage;

  if (error) {
    errorMessage = <p className="text-danger">Error: {error?.message}</p>;
  }
  if(loading){
    return <Loading></Loading>
 }

  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-item-center">
        <div className="line bg-primary w-50"></div>
        <p className="or px-3">or</p>
        <div className="line bg-primary w-50"></div>
      </div>
      {errorMessage}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto"
        >
          Log In With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
