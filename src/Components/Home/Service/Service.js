import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;

  return (
    <div className="service">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{description}</p>
        <h3>{price}</h3>
      </div>
      <Link to="/checkout">
        <button className="btn btn-primary">Booking</button>
      </Link>
    </div>
  );
};

export default Service;
