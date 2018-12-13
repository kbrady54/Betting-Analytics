import React from "react";
import "./Scoreboard.css";

const temporaryScoreTemplate = {
  homeTeam: "NE",
  awayTeam: "ATL",
  homeScore: "3",
  awayScore: "28",
  quarter: "4",
  time: "13:22",
  down: "3",
  distance: "6"
};

class Scoreboard extends React.Component {
  render() {
    return (
      <div className="Scoreboard">
        <div className="team-name-container">
          <div className="team-name">
            <p>{temporaryScoreTemplate.awayTeam}</p>
          </div>
          <div className="team-name">
            <p>{temporaryScoreTemplate.homeTeam}</p>
          </div>
        </div>
        <div className="team-score-container">
          <div className="team-score">
            <p>{temporaryScoreTemplate.awayScore}</p>
          </div>
          <div className="team-score">
            <p>{temporaryScoreTemplate.homeScore}</p>
          </div>
        </div>
        <div className="game-info-container">
          <div className="game-info">
            <div className="game-info-label">
              <p>Dn</p>
            </div>
            <div className="game-info-display">
              <p>{temporaryScoreTemplate.down}</p>
            </div>
          </div>
          <div className="game-info">
            <div className="game-info-label">
              <p>Dist</p>
            </div>
            <div className="game-info-display">
              <p>{temporaryScoreTemplate.distance}</p>
            </div>
          </div>
          <div className="game-info">
            <div className="game-info-label">
              <p>Qtr</p>
            </div>
            <div className="game-info-display">
              <p>{temporaryScoreTemplate.quarter}</p>
            </div>
          </div>
          <div className="game-info">
            <div className="game-info-label">
              <p>Time</p>
            </div>
            <div className="game-info-display">
              <p>{temporaryScoreTemplate.time}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Scoreboard;
