import React, { Component } from 'react';
import Gifs from './Gifs';
// import logo from './logo.svg';
// import './App.css';

const api_key = process.env.REACT_APP_API_KEY;


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Giphy Gifs</h2>
        </div>
        <p className="App-intro">
           🔥 Trending so trendily 🦄
        </p>
        <Gifs />
      </div>
    );
  }
}

export default App;
