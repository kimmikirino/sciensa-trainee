import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Main from './Pages/Main'
// import MovieView from './Pages/MovieView'
import "./App.css";

// import MultiComponentes from "./fundamentals/MultiComponentes";
import Lista from "./fundamentals/Lista";

function App() {
  const data = ["ReactJs", "Angular2+", "VueJs", "AngularJs", "EmberJs"];

  return <Lista data={data} />;
}

export default App;
