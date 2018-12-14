import React from "react";
import "./Scoreboard.css";

class Scoreboard extends React.Component {
  render() {
    return (
      <div className="Scoreboard">
        <div className="team-name-container">
          <div className="team-name">
            <p>{this.props.game.awayTeam}</p>
          </div>
          <div className="team-name">
            <p>{this.props.game.homeTeam}</p>
          </div>
        </div>
        <div className="team-score-container">
          <div className="team-score">
            <p>{this.props.game.awayScore}</p>
          </div>
          <div className="team-score">
            <p>{this.props.game.homeScore}</p>
          </div>
        </div>
        <div className="game-info-container">
          <div className="game-info">
            <div className="game-info-label">
              <p>Dn</p>
            </div>
            <div className="game-info-display">
              <p>{this.props.game.down}</p>
            </div>
          </div>
          <div className="game-info">
            <div className="game-info-label">
              <p>Dist</p>
            </div>
            <div className="game-info-display">
              <p>{this.props.game.togo}</p>
            </div>
          </div>
          <div className="game-info">
            <div className="game-info-label">
              <p>Yd Ln</p>
            </div>
            <div className="game-info-display">
              <p>{this.props.game.yardLine}</p>
            </div>
          </div>
          <div className="game-info">
            <div className="game-info-label">
              <p>Qtr</p>
            </div>
            <div className="game-info-display">
              <p>{this.props.game.qtr}</p>
            </div>
          </div>
          <div className="game-info">
            <div className="game-info-label">
              <p>Time</p>
            </div>
            <div className="game-info-display">
              <p>{this.props.game.time}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Scoreboard;
