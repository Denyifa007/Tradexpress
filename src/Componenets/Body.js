import React, { useState } from "react";
import "../Style/Body.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import img1 from "../Assets/btc4.jpg";
import img2 from "../Assets/btc2.jpg";
import img3 from "../Assets/btc3.jpg";
import Moregrid from "./Moregrid";

const Body = () => {
  const [MoreGrid, setMoreGrid] = useState(false);
  return (
    <div id="Crypto">
      <h2>Why do people get involved with Cryptocurrencies?</h2>
      <MDBContainer className="content">
        <MDBRow>
          <MDBCol id="col1" size="md">
            <img src={img1} alt="" id="img1" />
            <h5>Easy Mode of Payment</h5>
            <p>
              People can now easily send and receive money from anywhere in the
              world to purchase goods and pay for services.
            </p>
          </MDBCol>
          <MDBCol id="col2" size="md">
            <img src={img2} alt="" id="img2" />
            <h5>Financial Freedom</h5>
            <p>
              Just like the internet no single entity controls the Crypto
              network which provides users transparency and privacy, which puts
              you in absolute control of your money.
            </p>
          </MDBCol>
          <MDBCol id="col3" size="md">
            <img src={img3} alt="" id="img3" />
            <h5>Investment</h5>
            <p>
              The constant demand as made Cryptocurrecies a Digital Gold used
              for alternative store of wealth on long term investments.
            </p>
          </MDBCol>
        </MDBRow>
        {MoreGrid && <Moregrid />}
        <button id="learmore" onClick={() => setMoreGrid(!MoreGrid)}>
          {MoreGrid ? "Learn Less" : "Learn More"}
        </button>
      </MDBContainer>
    </div>
  );
};

export default Body;
