import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Componenets/Navbar";
import Getstartedpage from "./Componenets/Getstartedpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componenets/Home";
import Getstartedpage2 from "./Componenets/Getstartedpage2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Getstartedpage" element={<Getstartedpage/>} />
          {/* <Route path="Getstartedpage2" element={<Getstartedpage2/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
