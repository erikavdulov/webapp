//Create Alert Function

$(function(){
  //document ready
  alert("Document Loaded and Ready");

  $('#searchform').submit(function(){
    addItemToList("example item");
    return false;

  });

});

function addItemToList(item){
  $('#results').append("<li>") + item + ("</li>");
}
