import React from "react";
import { Link } from "react-router-dom";
import "../Style/Getstartedpage.css";

const Getstartedpage = () => {
  return (
    <div className="body-body">
      <div id="body" className="container-fluid">
        <div id="innertext">
          <h2>Welcome!</h2>
        </div>
        <div className="btn-contents">
            {/* <Link to="Getstartedpage2"> */}
              <button className="btn--1">Indivdual</button>
              <button className="btn--2">Business</button>
            {/* </Link> */}
        </div>
        <div id="form">
          <form id="inputfield" action="text">
            <input id="text1" type="Username" placeholder="Username" />
            <input id="text2" type="Full Name" placeholder="Full Name" />
            <input id="text3" type="Email" placeholder="Email" />
            <input id="text4" type="Phone Number" placeholder="Phone Number" />
            <input
              id="text5"
              type="Referral Code (optional)"
              placeholder="Referral Code (optional)"
            />
          </form>
          <div className="div-text">
            <p>
              By clicking the Sign Up button below, you agree to <br />{" "}
              TradExpress <span>terms and service</span>
            </p>
            <button id="btn-sign">Sign Up</button>
          </div>
          <div className="already">
            <p>
              Already have an account ?
              <Link to="/">
                <span className="ch">Click here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getstartedpage;
