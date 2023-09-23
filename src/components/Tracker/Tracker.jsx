import React from "react";
import { useState, useEffect } from "react";
import "./Tracker.css";
import axios from "axios";
import CoinDetails from "./CoinDetails";
export default function Tracker() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {coins.map((coin, index) => {
        return (
          <CoinDetails
            key={index}
            id={index}
            name={coin.name}
            currentPrice={coin.current_price}
            img={coin.image}
          />
        );
      })}
    </div>
  );
}
