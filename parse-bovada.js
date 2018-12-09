$(document).ready(function() {
  //
  const bovadaUrl =
    "https://www.bovada.lv/services/sports/event/v2/events/A/description/football/nfl";
  const scoresUrl = "http://www.nfl.com/liveupdate/scores/scores.json";

  const getLines = async () => {
    try {
      const response = await fetch(bovadaUrl);
      if (response.ok) {
        const jsonResponse = await response.json();
        const gamesArray = jsonResponse[0].events;
        //console.log(gamesArray.length);
        //console.log(gamesArray);
        //console.log(gamesArray[0].displayGroups[0].markets[1].description);
        let i = 0;
        for (i = 0; i < gamesArray.length; i++) {
          const eachGame = gamesArray[i].displayGroups[0].markets;
          const indexOfSpread = eachGame.findIndex(
            p => p.description == "Point Spread"
          );
          const awayTeamSpread =
            gamesArray[i].displayGroups[0].markets[indexOfSpread].outcomes[0];
          const homeTeamSpread =
            gamesArray[i].displayGroups[0].markets[indexOfSpread].outcomes[1];
          //const gameTimeUnix = gamesArray[i].startTime;
          //const gameTimeHuman = new Date(gameTimeUnix * 1000);
          //console.log(gameTimeHuman)
          let tr = $("<tr/>");
          //tr.append("<td>" + gameTimeHuman + "</td>");
          tr.append("<td>" + awayTeamSpread.description + "</td>");
          tr.append("<td>" + awayTeamSpread.price.handicap + "</td>");
          tr.append("<td>" + "@" + "</td>");
          tr.append("<td>" + homeTeamSpread.description + "</td>");
          tr.append("<td>" + homeTeamSpread.price.handicap + "</td>");
          $("#spread-table").append(tr);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  getLines();

  const getScores = async () => {
    try {
      const response = await fetch(scoresUrl);
      if (response.ok) {
        const jsonResponse = await response.json();
        //console.log(jsonResponse)
        const scoresArray = Object.values(jsonResponse);
        //console.log(scoresArray[0].away.abbr);
        //console.log(jsonResponse.away.abbr)
        for (i = 0; i < scoresArray.length; i++) {
          const awayTeamName = scoresArray[i].away.abbr;
          const awayTeamScore = scoresArray[i].away.score.T;
          //console.log(awayTeamScore);
          const homeTeamName = scoresArray[i].home.abbr;
          const homeTeamScore = scoresArray[i].home.score.T;
          let tr = $("<tr/>");
          tr.append("<td>" + awayTeamName + "</td>");
          tr.append("<td>" + awayTeamScore + "</td>");
          tr.append("<td>" + "@" + "</td>");
          tr.append("<td>" + homeTeamScore + "</td>");
          tr.append("<td>" + homeTeamName + "</td>");
          $("#score-table").append(tr);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  getScores();

  //let linesTimes = setInterval(getLines, 60000);
  //let scoresTimer = setInterval(getScores, 5000);
});

//FANTASTIC GARBAGE CODE!!!!

/*

var tr;
for (i=0; i<gamesArray.length, i++) {
  tr = $('<tr/>');
  tr.append("<td>" + gamesArray[i].displayGroups[0].markets[1].outcomes[0].description + "</td>");
  tr.append("<td>" + gamesArray[i].displayGroups[0].markets[1].outcomes[0].price.handicap + "</td>");
  tr.append("<td>""</td>");
  tr.append("<td>" + gamesArray[i].displayGroups[0].markets[1].outcomes[1].description + "</td>");
  tr.append("<td>" + gamesArray[i].displayGroups[0].markets[1].outcomes[0].[price.handicap] + "</td>");
};

[0].displayGroups[0].markets[1].outcomes

$.getJSON(url,
function (data) {
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].User_Name + "</td>");
        tr.append("<td>" + data[i].score + "</td>");
        tr.append("<td>" + data[i].team + "</td>");
        $('table').append(tr);
    }
});

for (r = 1; r < scoresArray.length; r++) {
  let table = document.getElementById("#score-table");
  table.deleteRow(r);
}

*/
