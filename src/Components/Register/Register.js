import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
  };
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  if(user){
      navigate("/home");
  }

  return (
    <div>
      <div className="container w-50 mx-auto mt-4 mb-5">
        <h2 className="text-primary text-center">Please Register!!!</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type="text"
              placeholder="Enter your Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p className="text-1">
          Already have an account?
          <Link
            to="/login"
            className="text-danger span-1"
            onClick={navigateLogin}
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
