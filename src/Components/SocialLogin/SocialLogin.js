import React from "react";
import "./SocialLogin.css";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-item-center">
        <div className="line bg-primary w-50"></div>
        <p className="or px-3">or</p>
        <div className="line bg-primary w-50"></div>
      </div>
      <div>
        <button className="btn btn-info w-50">Log In With Google</button>
      </div>
    </div>
  );
};

export default SocialLogin;
