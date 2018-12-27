const scoresUrl = "http://www.nfl.com/liveupdate/scores/scores.json";

const GetScores = {
  update() {
    return fetch(scoresUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        const scores = Object.values(jsonResponse);
        return scores.map(game => {
          return {
            game: game,
            awayTeam: game.away.abbr,
            homeTeam: game.home.abbr,
            awayScore: game.away.score.T,
            homeScore: game.home.score.T,
            qtr: game.qtr,
            time: game.clock,
            down: game.down,
            togo: game.togo,
            yardLine: game.yl,
            possession: game.posteam
          };
        });
      });
  }
};

export default GetScores;
