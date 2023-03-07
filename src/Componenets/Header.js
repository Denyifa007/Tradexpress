import React from "react";
import "../Style/Header.css";
import img from "../Assets/Group 68.svg";
import img2 from "../Assets/Group 69.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      {/* <div id="circle-one"> */}
        <div id="innercircle1"></div>
        <div id="innercircle2"></div>
      {/* </div> */}
        <div id="buy">
          <h2>Buy, sell and manage your Crypto on TradExpress.</h2>
          <p>
            Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP <br />{" "}
            with NGN.
          </p>
          <Link to="Getstartedpage">
            <button id="btn-gsd">Get Started</button>
          </Link>
          <div id="appstore">
          <img src={img} alt="" id="appst" />
          <img id="img7" src={img2} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Header;
