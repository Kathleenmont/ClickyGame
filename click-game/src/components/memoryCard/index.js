import React from "react";
import "./style.css";

const MemoryCard = props => {
  return (
    <div className="card">
      <span >
        <div className="card-img card-body">
          <img alt={props.name} src={props.image} height="300"  onClick={() => props.cardClick(props.id)}/>
        </div>
      </span>
    </div>
  );
};

export default MemoryCard;
