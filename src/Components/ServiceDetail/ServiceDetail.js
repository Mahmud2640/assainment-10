import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceID } = useParams();
  return (
    <div>
      <h1>This is detail....{serviceID}</h1>
      <div className='text-center mb-4'>
      <Link to="/checkout">
        <button className="btn btn-primary">Checkout</button>
      </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
