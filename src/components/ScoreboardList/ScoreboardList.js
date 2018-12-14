import React from "react";
import "./ScoreboardList.css";
import Scoreboard from "../Scoreboard/Scoreboard";
import GetScores from "../../util/GetScores/GetScores";

class ScoreboardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { games: [] };
    this.updateScores = this.updateScores.bind(this);
  }

  updateScores() {
    GetScores.update().then(games => {
      this.setState({ games: games });
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateScores(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="scoreboard-list-container">
        {this.state.games.map(game => {
          return <Scoreboard game={game} key={game} />;
        })}
      </div>
    );
  }
}
