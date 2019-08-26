import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main";
import MovieView from "./Pages/MovieView";
import MovieNew from "./Pages/MovieNew";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/filme/novo" component={MovieNew} />
        <Route path="/filme/:id" component={MovieView} />
      </Switch>
    </Router>
  );
}

export default App;
