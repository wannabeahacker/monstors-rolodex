import React from "react";
import "./card-list.css";
import Card from "../card/card";

const CardList = props => {
  // console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map(mon => (
        <Card key={mon.id} monsters={mon}></Card>
      ))}
    </div>
  );
};

export default CardList;
