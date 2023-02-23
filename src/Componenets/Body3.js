import React from "react";
import "../Style/Body3.css";
import applelogo from "../Assets/Icon awesome-apple-1.svg";
import playstore from "../Assets/Group 53.svg";

const Body3 = () => {
  return (
    <div id="ready">
      <div>
        <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h2>Create your account for free and start trading today!</h2>
      </div>
      <button id="btn-getstart">Get Started</button>
      <div id="playstore">
        <button id="applogo">
          <div id="applelogo">
            <img src={applelogo} alt=""  />
          </div>
          <div id="download">
          <p id="pd">Download on the</p> <h5 id="hs">App Store</h5>
          </div>
        </button>
        <button id="google">
            <div id="playlogo">
          <img src={playstore} alt="" />
          </div>
          <div id="googleplay">
           <p id="go">Get on</p> <h5 id="gp">Google Play</h5>
           </div>
        </button>
      </div>
    </div>
  );
};

export default Body3;
