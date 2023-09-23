import React from "react";

export default function CoinDetails(props) {
  return (
    <div className="container">
      <div className="detailsRow">
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.currentPrice}</p>
        <img src={props.img} alt="coin image" />
      </div>
    </div>
  );
}
