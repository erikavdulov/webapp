var apikey = "af44445c54798715ed796602012c4a33d507c499";
var baseUrl = "http://www.giantbomb.com/api";

// construct the uri with our apikey
var GamesSearchUrl = baseUrl + '/search/?api_key=' + apikey + '&format=json';
var query = "";

$(document).ready(function() {

  // send off the query
  $('#form').submit(function(){
    var userInput=$("#userInput").val();
    //call search youtube function
    getResultsFromOMDB(userInput);
    return false;
  });
});

function getResultsFromOMDB(userInput){
  //call api using ajax
  //build url for the request
  var url ="https://www.giantbomb.com/api/search/?api_key=af44445c54798715ed796602012c4a33d507c499" + searchterms;
  //use jquery json shortcut
  $.getJSON(url,function(jsondata){
    //handle the results
    addResultTitles(jsondata);
  });

  function addResultTitles(jsondata){
    var htmlstring = "";
    for (var i=0; i<10; i++){
      var title = jsondata.Search[i].Title;
      htmlstring += "<li>" + title + "</li>";
    }

    $("#results2").html(htmlstring);
  }


/*
$.ajax({
    url: GamesSearchUrl + '&query=' + encodeURI(query),
    dataType: "json",
    success: searchCallback
  });

  function searched(){
            var input = document.getElementById("userInput").value;
            alert(input);
            return(input);
          }

  function searchCallback(data) {
    $('body').append('Found ' + data.total + ' results for ' + query);
    var games = data.game;
    $.each(games, function(index, game) {
        $('body').append('<h1>' + game.name + '</h1>');
        $('body').append('<p>' + game.description + '</p>');
        $('body').append('<img src="' + game.posters.thumbnail + '" />');
    });
}
});






$(function(){
  //ready
  alert ("document ready");

  $('#searchform').submit(function(){
    var searchterms=$("#searchterms").val();
    //call search youtube function
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms){
  //call api using ajax
  //build url for the request
  var url ="https://www.giantbomb.com/api/search/?api_key=af44445c54798715ed796602012c4a33d507c499" + searchterms;
  //use jquery json shortcut
  $.getJSON(url,function(jsondata){
    //handle the results
    addResultTitles(jsondata);
  });


}


function addResultTitles(jsondata){
  var htmlstring = "";
  for (var i=0; i<10; i++){
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title + "</li>";
  }

  $("#results").html(htmlstring);
}



function searched() {
        var input = document.getElementById("userInput").value;
        alert(input);
        return(query);
        }
*/
