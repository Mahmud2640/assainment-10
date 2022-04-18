import React from "react";
import "./Checkout.css";
import checkout from "../../images/checkout.jpeg";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const booking = () => {
    toast.success("Thanks for booking !", {
      position: toast.POSITION.TOP_CENTER
    });
  };
  return (
    <div className="card">
      <div className="card-header">
        <img src={checkout} alt="" />
      </div>
      <div className="card-body">
        <div className="card-title">Order Summary</div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Number" />
          </Form.Group>
        </Form>
        <div className="card-plan">
          <div className="card-plan-text">
            <div className="card-plan-title">Total Ammount</div>
            <div className="card-plan-price">$59.99</div>
          </div>
        </div>
        <div className="card-payment-button">
          <button onClick={booking}>Proceed to Payment</button>
        </div>
        <div className="card-cancel-button">
          <button>Cancel Order</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
