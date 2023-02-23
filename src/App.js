import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Componenets/Navbar";
import Getstartedpage from "./Componenets/Getstartedpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componenets/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
    
          <Route index element= {<Home/>} />
          <Route path='Getstartedpage' element= {<Getstartedpage />} />

        
        </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
