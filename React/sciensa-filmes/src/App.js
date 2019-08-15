import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './Pages/Main'
import MovieView from './Pages/MovieView'
import './App.css'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/filme" render={props => <MovieView {...props} />} />
    </Router>
  );
}

export default App;
