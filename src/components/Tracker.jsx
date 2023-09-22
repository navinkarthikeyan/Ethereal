import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
export default function tracker() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return <div></div>;
}
