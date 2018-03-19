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

function addItemToList(item){
  $('#results').append("<li>") + item + ("</li>");
}
