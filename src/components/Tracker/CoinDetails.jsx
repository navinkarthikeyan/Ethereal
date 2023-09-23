import React from "react";

export default function CoinDetails(props) {
  return (
    <div className="container">
      <div className="detailsRow">
        <p>#{props.id + 1}</p>
        <p>{props.name}</p>
        <p className="curentprice">{props.currentPrice}</p>
        <div className="coinimage">
          <img src={props.img} alt="coin image" />
        </div>
      </div>
    </div>
  );
}
