import "./App.css"
import {  BrowserRouter as Router } from "react-router-dom";

import data from "./data/data.json";

import PreNavBar from "./components/PreNavBar.js";
import NavBar from "./components/NavBar.js";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";

function App() {
  return (
    <Router>
      <PreNavBar/>
      <NavBar/>
      <Slider start={data.banner.start} />
      <Offers Offers={data.offer}/>
    </Router>
  );
}

export default App;
