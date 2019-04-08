import React, { Component } from 'react';
import Board from './components/Board';
import Login from './containers/Login';
import Home from './containers/Home';
import history from './history';
import { Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/login"  component={Login} />
        <Route path="/home"  component={Home} />
        <Route exact path="/" component={Board} />
      </Router>
    );
  }
}

export default App;
