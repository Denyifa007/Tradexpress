import React from "react";
import "../Style/Foot.css";
import union1 from "../Assets/Union 1.svg";
import union2 from "../Assets/Union 1.svg";
import union3 from "../Assets/Union 1.svg";
import colom1 from "../Assets/Group 8699.svg";
import colom2 from "../Assets/Group 8699.svg";
import colom3 from "../Assets/Group 8699.svg";
import abiodun from "../Assets/abiodun tech.jpeg";
import denyifa from "../Assets/78923.jpg";
import prasie from "../Assets/finegirl praise.jpeg";

const Foot = () => {
  return (
    <div id="foot">
      <div>
        <h2>Customer's Review</h2>
      </div>
      <div id="customer">
        <div>
          <img src={union1} alt="" id="union1" />
          <img src={colom1} alt="" id="colom1" />
          <p id="pcolom1">
            Trading on TradExpress mobile & web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>

          <div id="abinaija">
            <img src={abiodun} alt="" id="abiodun" />
            <div id="abidetails">
            <h6>Abiodun</h6>
            <p>Togo</p>
            </div>
          </div>
        </div>
        <div>
          <img src={union2} alt="" id="union2" />
          <img src={colom2} alt="" id="colom2" />
          <p id="pcolom2">
            They have the best rate compared to other platforms with fast
            payout.
          </p>

          <div id="denusa">
            <img src={denyifa} alt="" id="denyifa" />
            <div id="denyifadetails">
            <h6>Denyifa</h6>
            <p>USA</p>
            </div>
          
          </div>
        </div>
        <div>
          <img src={union3} alt="" id="union3" />
          <img src={colom3} alt="" id="colom3" />
          <p id="pcolom3">
            Easy to fund and withdraw coins or cash on their platform, I will
            definitely trade with them again.
          </p>

          <div id="pranaija">
            <img src={prasie} alt="" id="praise" />
            <div id="details">
            <h6>Praise</h6>
            <p>London</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
