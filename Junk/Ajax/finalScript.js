//Create Alert Function

$(function(){
  //document ready
  alert("Document Loaded and Ready");

  $('#searchform').submit(function(){
    var searchterms = $("#searchterms").val();
    getResultsFromOMDB(searchterms);
    return false;

  });
});

function getResultsFromOMDB(searchterms){
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=595c0d31=" + searchterms;
  $.getJSON(url, function(jsondata){
    addResultsTitles(jsondata)
  });
}

function addResultsTitles(jsondata){
  var htmlstring = "";
for (var i=0; i<10; i++){
  for title = jsondata.Search[i].Title;
  htmlstring += "<li>" + title + "</li>
}

  $('#resultsbox').append("<p>" + normal + "</p>");
}

function addItemToList(item){
  $('#results').append("<li>") + item + ("</li>");
}
