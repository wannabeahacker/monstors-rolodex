import React from "react";
import "./card.css";
const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="moster"
        src={`https://robohash.org/${props.monsters.id}?set=set1&size=180x180`}
      />
      <h2>{props.monsters.name}</h2>
      <p>{props.monsters.email}</p>
      <p>{props.monsters.phone}</p>
    </div>
  );
};

export default Card;
