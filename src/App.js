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
        <Route exact path="/"  component={Login} />
        <Route path="/home"  component={Home} />
        <Route path="/task" component={Board} />
      </Router>
    );
  }
}

export default App;
