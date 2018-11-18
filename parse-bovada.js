$( document ).ready(function() {

//
const bovadaUrl = 'https://www.bovada.lv/services/sports/event/v2/events/A/description/football/nfl'

const getLines = async () => {
  try {
    const response = await fetch (bovadaUrl);
    if (response.ok) {
      const jsonResponse = await response.json();
      const gamesArray = jsonResponse[0].events;
      //console.log(gamesArray.length);
      console.log(gamesArray);
      //console.log(gamesArray[0].displayGroups[0].markets[1].description)
      let i=0
      for (i=0; i<gamesArray.length; i++) {
        const eachGame = gamesArray[i].displayGroups[0].markets
        const indexOfSpread = eachGame.findIndex(p => p.description == "Point Spread")
        const awayTeam = gamesArray[i].displayGroups[0].markets[indexOfSpread].outcomes[0];
        const homeTeam = gamesArray[i].displayGroups[0].markets[indexOfSpread].outcomes[1];
        const gameTimeUnix = gamesArray[i].startTime;
        const gameTimeHuman = new Date(gameTimeUnix * 1000);
        console.log(gameTimeHuman)
        let tr = $('<tr/>');
        //tr.append("<td>" + gameTimeHuman + "</td>");
        tr.append("<td>" + awayTeam.description + "</td>");
        tr.append("<td>" + awayTeam.price.handicap + "</td>");
        tr.append("<td>" +"@" + "</td>");
        tr.append("<td>" + homeTeam.description + "</td>");
        tr.append("<td>" + homeTeam.price.handicap + "</td>");
        $('table').append(tr);
      };
    }
  } catch (error) {
    console.log(error);
  }
};

getLines();

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
});*/
