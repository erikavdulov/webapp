//Create Alert Function

$(function(){
  //document ready
  alert("Document Loaded and Ready");

  $('#searchform').submit(function(){
    var searchterms = $("#searchterms").val();
    addItemToList(searchterms);
    return false;

  });
});

function getResultsFromOMDB(searchterms){
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=595c0d31=" + searchterms;
  $.getJSON(url, function(jsondata){
    printJSON(jsondata)
  });
}

function printJSON(jsondata){
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>" + normal + "</p>");
}

function addItemToList(item){
  $('#results').append("<li>") + item + ("</li>");
}
