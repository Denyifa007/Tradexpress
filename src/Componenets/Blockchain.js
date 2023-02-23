import React, { useState, useEffect } from "react";
import "../Style/Blockchain.css";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

const Blockchain = () => {
  const [Data, setData] = useState([]);

  async function fetchData() {
    try {
      const fetcher = await fetch(
        "https://api.coinlore.net/api/tickers/?start=0&limit=4"
      );
      const res = await fetcher.json();
      setData(res.data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="innerdata">
      {Data.map((datum) => {
        const { id, symbol, percent_change_1h, price_usd } = datum;
        return (
          <div className="innerdatas" key={id}>
            <div className="btc">
              <h4>{symbol}/NGN</h4>
              <p>
                {percent_change_1h}{" "}
                {percent_change_1h >= 0 ? (
                  <FaArrowCircleUp style={{ color: "green", marginBottom:'5px' }} />
                ) : (
                  <FaArrowCircleDown style={{ color: "red", marginBottom:'5px' }} />
                )}
            
              </p>
            
            </div>
            <p id="usd">{price_usd}NGN</p>
          </div>
        
        );
      })}
    </div>
  );
};

export default Blockchain;
