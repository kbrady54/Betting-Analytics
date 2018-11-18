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
      //console.log(gamesArray);
      let i=0
      for (i=0; i<gamesArray.length; i++) {
        let tr = $('<tr/>');
        tr.append("<td>" + gamesArray[i].displayGroups[0].markets[1].outcomes[0].description + "</td>");
        tr.append("<td>" + gamesArray[i].displayGroups[0].markets[1].outcomes[0].price.handicap + "</td>");
        tr.append("<td>" +"@" + "</td>");
        tr.append("<td>" + gamesArray[i].displayGroups[0].markets[1].outcomes[1].description + "</td>");
        tr.append("<td>" + gamesArray[i].displayGroups[0].markets[1].outcomes[1].price.handicap + "</td>");
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
