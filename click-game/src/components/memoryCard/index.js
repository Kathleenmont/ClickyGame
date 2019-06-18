import React from "react";
import "./style.css";

const MemoryCard = (props) => {
  return (
    <div className="card">
      <div className="card-img card-body">
        <img alt={props.name} src={props.image} height="300" />
      </div>
    </div>
  );
};

export default MemoryCard;
