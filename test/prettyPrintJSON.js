$(function(){
  //ready
  alert ("document ready");

  $('#searchform').submit(function(){
    var searchterms=$("#searchterms").val();
    //call search youtube function
    getResultsFromIGDB(searchterms);
    return false;
  });
});

function getResultsFromIGDB(searchterms){
  //call api using ajax
  //build url for the request
  var url ="http://www.omdbapi.com/?i=tt3896198&apikey=a6213293&s=" + searchterms;
  //use jquery json shortcut
  $.getJson(url,function(jsondata){
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
