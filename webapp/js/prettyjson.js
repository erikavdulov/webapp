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

function getResultsFromIGDB(searchterms){
  //call api using ajax
  //build url for the request
  var url ="http://www.api-endpoint.igdb.com/?apikey=8fd263ee7124bbe3816cb5bba4e3c3ca&s=" + searchterms;
  //use jquery json shortcut
  $.getJson(url,function(jsondata){
    //handle the results
    prettyprintJSON(jsondata);
  });


}


function prettyprintJSON(jsondata){
  //prints the json to the screen
  var pretty= JSON.stringify(jsondata, null,4);
  $('#resultsbox').append("<pre>"+pretty + "</pre>");
}
