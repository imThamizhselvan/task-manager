import React, { Component } from 'react';
import Card from './components/Card';
import List from './components/List';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
