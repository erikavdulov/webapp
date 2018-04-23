
$(document).ready(function(){
    $.ajax({
      url: "http://api.giantbomb.com/search/",
      type: "get",
      data: {api_key : "ce8a57745882a7c9e177183a8a4dfae586f1bc8b", query: "halo", resources : "game", field_list : "name, resource_type, image", format : "jsonp", json_callback : "gamer" },
      dataType: "jsonp"
    });
});

function gamer(data) {
      var table = '<table>';
      $.each( data.results, function( key, value ) {
      table += '<tr><td>' + value.image + '</td><td>' + value.name + '</td><td>' + value.resource_type + '</td></tr>';
    });
        table += '</table>';
    $('#myelement').html(table);
}
