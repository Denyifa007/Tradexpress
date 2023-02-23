import React from "react";
import Blockchain from "./Blockchain";
import Body from "./Body";
import Body2 from "./Body2";
import Body3 from "./Body3";
import Foot from "./Foot";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Header from "./Header";


const Home = () => {
  return (
    <div>
      <Header/>
      <Blockchain />
      <Body />
      <Body2 />
      <Body3 />
      <Foot />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
