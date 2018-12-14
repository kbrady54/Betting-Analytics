const scoresUrl = "http://www.nfl.com/liveupdate/scores/scores.json";

const GetScores = {
  update() {
    return fetch(scoresurl)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        const scores = Object.values(jsonResponse);
        return scores.map(game => {
          return {
            awayTeam: game.away.abbr,
            homeTeam: game.home.abbr,
            awayScore: game.away.score.T,
            homeScore: game.home.score.T,
            qtr: game.qtr,
            time: game.time,
            down: game.down,
            togo: game.togo
          };
        });
      });
  }
};

export default GetScores;
