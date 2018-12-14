import React, { Component } from "react";
import "./App.css";
import ScoreboardList from "./components/ScoreboardList/ScoreboardList";

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
