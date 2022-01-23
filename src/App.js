import "./App.css"
import {  BrowserRouter as Router,Route } from "react-router-dom";

import data from "./data/data.json";

import PreNavBar from "./components/PreNavBar.js";
import NavBar from "./components/NavBar.js";
import Slider from "./components/Slider.js";


function App() {
  return (
    <Router>
      <PreNavBar/>
      <NavBar/>
      <Slider start={data.banner.start} />
      <Slider start={data.banner.start}/>
    </Router>
  );
}

export default App;
