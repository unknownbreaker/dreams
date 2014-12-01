/* Definitely should be coming from environmental variables
*
* Rename the file videoplayer.js.erb and the asset pipeline will do all the
* magic for you.
* */


var clientId = '974537623396-tvvr2jn442jsf1ifr4qblfhaje5cd0i2.apps.googleusercontent.com';
var apiKey = 'AIzaSyBHlHFpUocBCj-VbXZXy5BKaIkvXh2jpgI';
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
}

/* I don't think this class is constructed properly.  You're definining a
 * number of functions in main() when they should probably be put on the
 * prototype
 *
 */

VideoPlayer = {
  main: function(videos) {

    /* why isn't VideoMaker it's own standalone constructor fn? */
    VideoMaker = function(userVideos) {
      this.playList = [];
      this.cueList = [];
      this.playList = userVideos.shift()
      this.cueList = this.cueList.concat(userVideos)
    }

    /* This code looks a lot like initialization code, why not make it the work
     * of VideoPlayer's constructor fn? */

    var userList1 = new VideoMaker(videos)

    // Not sure this is very valuable...why not just call playVideo() on the
    // thing in place?
    function onPlayerReady(event) {
      event.target.playVideo();
    }

    /* Not very enlightening.  False is probably clearer */
    /* ...AAAND you don't even use it.  It's in your commented-out dead code.
     * Your code is growing more confusing by your tolerance for unused code.
     *
     */

    var done = false;
    function onPlayerStateChange(event) {
      console.log(event.data)

      // if (event.data == YT.PlayerState.PLAYING && !done) {
      //   setTimeout(stopVideo, 10000);
      //   done = true;
      // }
      if (event.data == YT.PlayerState.PLAYING) {
       setTimeout(function() {$('#player').fadeIn(3000)}, 10000)
       setInterval( function() {if (player.getCurrentTime() > 8) {
        $('#player').fadeOut(2000)
        };}, 1000)
        };
      }


    function onPlayerError(event) {
      console.log(event);
    }


    /* delete this noise */
  // setInterval( function() {if (player.getCurrentTime() > 8) {
  //   $('#player').fadeOut(3000)
  // };}, 1000)




  // if (player.getCurrentTime() > 8) {
  //   $('#player').fadeOut(3000)
  // };



    // function fadeOutTimer() {
    //   setTimeout(function() {$('#player').fadeOut(3000)}, 10000)
    // }

    function stopVideo() {
      player.stopVideo();
    }

    function dreamPlaylist(videoarray) {
      videoarray.shift()
      videoTimer(videoarray)
    }

    function playTheVideo(video) {
      player.loadVideoById({
        'videoId': video,
        'startSeconds': 2,
        'endSeconds': 12,
        'suggestedQuality': 'large'});

      dreamPlaylist(userList1.cueList);
    }


    function videoList(videoId) {
      playTheVideo(videoId);
      player.playVideo();
    }



    function videoTimer(array) {
      if(array.length > 0) {
        setTimeout(function() { videoList(array[0])}, 10000);
      }
    }



    player = new YT.Player('player', {
      height: '720',
      width: '1280',
      'videoId': userList1.playList,
      playerVars: {
        controls: 0,
        disablekb: 1,
        showinfo: 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
        'onError': onPlayerError
      },
    });

    dreamPlaylist(userList1.cueList)
  }
}

