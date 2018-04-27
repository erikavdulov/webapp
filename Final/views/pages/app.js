$("#search").submit(function(event) {
  event.preventDefault();
  var userInput = $("#query").val();
  getRequest(userInput);
});

function showResults(result) {
  var html = "";
  $.each(result.results, function(index, value) {
    var gameName = value.name;
    var boxArt = value.image ? value.image.super_url : '';
    if (boxArt != '') {
    boxArt = 'http://static.giantbomb.com' + boxArt;
  }
    var summary = value.deck;
    var site_detail = value.site_detail_url;
    html += "<li><p class='game-title'>" + gameName + "</p>" + "<img src=" + boxArt + " class='game-image'>" + "<p class='game-summary'>" + summary + "</p>" + "<a href='" + site_detail + "' ><p class='game-details'>Click for more information</p></a></li>";
  });

  $("#search-results").html(html);
}

function getRequest(userInput){
  $.ajax({
    url: "https://www.giantbomb.com/api/search",
    type: "GET",
    data: {
      resources: "game",
      query: userInput,
      api_key: "aa62252b36e62f2afa79ad99e6da043eb90e2da4",
      format: "jsonp",
      crossDomain: true,
      limit: 15,
      field_list: "deck,name,image,site_detail_url",
      json_callback: 'showResults'
    },
    dataType: "jsonp"
  }).done(function(data) {
    showResults(data.results);
    console.log(data);
  });
}
