import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const {id, name, img, description, price } = service;
  const navigate = useNavigate();
  const handleServiceDetail = id =>{
    navigate(`/service/${id}`);
  }
  return (
    <div className="service">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{description}</p>
        <h3>{price}</h3>
      </div>
      <button onClick={() => handleServiceDetail(id)} className="btn btn-primary">
      See More
      </button>
    </div>
  );
};

export default Service;
