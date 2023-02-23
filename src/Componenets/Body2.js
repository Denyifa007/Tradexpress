import React from "react";
import "../Style/Body2.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import image1 from "../Assets/Group 28.svg";
import image2 from "../Assets/Group 52.svg";
import image3 from '../Assets/Group 28.svg'

const Body2 = () => {
  return (
    <div id="steps">
      <h2>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
      <MDBContainer className="content">
        <MDBRow>
          <MDBCol md="7">
            <div id="one">1</div>
            <div id="account-one">
              <h5>Create a free Account</h5>
              <p>
                Sign up for your free TradExpress Wallet on web, iOS, or Android
                devices and follow our easy process to set up your profile.
              </p>
            </div>
          </MDBCol>
          <MDBCol md="5">
            <img src={image1} alt="" id="image1" />
          </MDBCol>
        </MDBRow>
        <MDBRow id="row-two">
          <MDBCol md="5">
            <img src={image2} alt="" />
          </MDBCol>
          <MDBCol md="7">
            <div id="two">2</div>
            <div id="account-two">
              <h5>Deposit</h5>
              <p>
                Choose your preferred deposit option like bank transfer,
                credit/debit card or send digital asset directly to your wallet
                for easy funding/withdrawal.
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow id="row-one">
          <MDBCol md="7">
            <div id="three">3</div>
            <div id="account-three">
              <h5>Buy/ Sell Crypto</h5>
              <p>
                Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your
                wallet or send it easily to friends and family.
              </p>
            </div>
          </MDBCol>
          <MDBCol md="5">
            <img src={image3} alt="" id="image3" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Body2;
