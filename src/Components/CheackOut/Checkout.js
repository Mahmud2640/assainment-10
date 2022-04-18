import React from 'react';
import './Checkout.css';
import checkout from "../../images/checkout.jpeg";

const Checkout = () => {
   return (
      <div class="card">
    <div class="card-header">
      <img src={checkout} alt="" />
    </div>
    <div class="card-body">
      <div class="card-title">Order Summary</div>
      <div class="card-text">We Provide best service for your health! best wishing...</div>
      <div class="card-plan">
        
        <div class="card-plan-text">
          <div class="card-plan-title">Total Ammount</div>
          <div class="card-plan-price">$59.99</div>
        </div>
        
      </div>
      <div class="card-payment-button">
        <button>Proceed to Payment</button>
      </div>
      <div class="card-cancel-button">
        <button>Cancel Order</button>
      </div>
    </div>
  </div>
   );
};

export default Checkout;