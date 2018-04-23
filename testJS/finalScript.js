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
