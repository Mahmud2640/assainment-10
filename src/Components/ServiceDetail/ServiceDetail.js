import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceID } = useParams();
  return (
    <div>
      <h1>This is detail....{serviceID}</h1>
    </div>
  );
};

export default ServiceDetail;
