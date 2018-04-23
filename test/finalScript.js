var apikey = "af44445c54798715ed796602012c4a33d507c499";
var baseUrl = "http://www.giantbomb.com/api";

// construct the uri with our apikey
var GamesSearchUrl = baseUrl + '/search/?api_key=' + apikey + '&format=json';
var query = searched();


$(function(){
  //ready
  alert ("document ready");

  $('#form').submit(function(){

    var userInput=$("#userInput").val();
    //call search youtube function
    getResultsFromOMDB(userInput);
    return false;
  });
});
/*
function getResultsFromOMDB(userInput){
  //call api using ajax
  //build url for the request
  var url= GamesSearchUrl + '&query=' + encodeURI(query),
  //use jquery json shortcut
  $.getJSON(url,function(jsondata){
    //handle the results
    addResultTitles(jsondata);
  });


}*/

function searched() {
        var input = document.getElementById("userInput").value;
        alert(input);
        return(input)
        }


function addResultTitles(jsondata){
  var htmlstring = "";
  for (var i=0; i<10; i++){
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title + "</li>";
  }

  $("#results2").html(htmlstring);
}
