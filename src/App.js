import React, { Component } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard/Scoreboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScoreboardList />
      </div>
    );
  }
}

export default App;
