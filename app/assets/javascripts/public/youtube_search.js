var apiKey = GoogleAuth.Keys.apiKey.responseText;

var results_values = [];

var selected_search = false;



YouTubeSearch = {}

$(document).ready(function() {

YouTubeSearch.SearchBar = {
  main: function() {
    $('#youtube').autocomplete({
      source: function(request, response){
        /* Google Developer ID (optional) */
        /* Search keyword */
        var query = request.term;
        /* youtube query */
        $.ajax({
          url: "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q="+query+"&key="+apiKey+"&format=5&alt=json&callback=?",
          dataType: 'jsonp',
          success: function(data) {

           response( $.map( data[1], function(item) {
            console.log(item);
            return {
              label: item[0],
              value: item[0]
            }
          }));
       }});
      },
      /* You can use transaction is selected here to */
      select: function( event, ui ) {
        selected_search = true;
        $.youtubeAPI(ui.item.label, 10); // Change integer to change number of search results
      },
      open: function () {
        $('ul.ui-autocomplete').addClass('opened');
      },
      close: function () {
        $('ul.ui-autocomplete').removeClass('opened').css('display', 'block');
      }
    }).data("ui-autocomplete")._renderItem = function(ul, item) {
      var $a = $("<a></a>");
      $("<span class='result'></span>").text(item.label).appendTo($a);
      return $("<li></li>").append($a).appendTo(ul);
    };

    $('input#youtube').keyup(function(event){
      event.preventDefault();
      if(event.keyCode == 13 && selected_search == false){
        var value = $('input#youtube').val();
        $.youtubeAPI(value, 10); // Change integer to change number of search results
      }
    });


    $('button#submit').click(function(){
      var value = $('input#youtube').val();
      $.youtubeAPI(value, 10); // Change integer to change number of search results
    });

    $.youtubeAPI = function(query, max_results){
      console.log(query);
      $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&q=' + query + '&max-results=' + 10 + '&key=AIzaSyB_0aoJfPRmF5PGZj0uEA5InZKBT6BTELg',
        dataType: 'jsonp',
        error: function(){
          console.log("You found me!")
        },
        success: function( response ){
        console.log(response)
        video_objects = response.items
          console.log(results_values);
          BackGround.View.blackOut();
          DataParser.findDurations(video_objects)
          $("#dream-modal-container").hide();
        }
      });
    }
  },

  parseVideoObject: function(video_object) {
    return video_object.id;
  },

  compileVideoObjects: function(video_objects) {
    for(var i = 0; i < video_objects.length; i++) {
      results_values[i] = (YouTubeSearch.SearchBar.parseVideoObject(video_objects[i]));
    }

  },

  sampleVideoObjects: function(video_objects) {
    return _(video_objects).sample(10);
  }
}


  $(".random-dream").on("click","a", function(event){
    event.preventDefault();
    $("#dream-modal").hide();
    $("#dream-modal-container").fadeIn(1000);
    $("input#youtube").focus();

    window.setTimeout(function() {
      YouTubeSearch.SearchBar.main();
    }, 1);

    var event_counter = 0;
    $("body").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',".ui-autocomplete",
      function() {
        if(event_counter % 2 != 0) {
           $('ul.ui-autocomplete').css('display', 'none');
         }
        event_counter ++;
     });
  });
});

