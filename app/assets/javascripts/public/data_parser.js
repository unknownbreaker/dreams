DataParser = {}

DataParser = {

  findDurations: function (video_objects_array) {
  		var counter = 0
  			var item = video_objects_array[counter]
  	  	function getData() {
			  	$.ajax({
			  	type: 'GET',
			  	url: 'https://www.googleapis.com/youtube/v3/videos?id=' + item.id.videoId + '&part=contentDetails&key=AIzaSyAH5R9a-DetfWcxRAv9yFcbJHfQhu_HY-Y',
			  	dataType: 'jsonp',
			  	error: function(){
			  	  console.log("You found me!")
			  	},
			  	success: function( response ){
			  	  console.log('successful call to get the durations')

			  		var video = $(response.items)
			  	  if(video === undefined || video.length < 1 ){
			  	    var duration = null
			  	    video_objects_array[counter].id.durtation = durtation
			  	    counter++;
              if (counter < 5) getData();
			  	  } else {
			  	    var duration = video.attr('contentDetails').duration
			  	    video_objects_array[counter].id.duration = duration
			  	    counter++;
              if (counter < 5) getData();
			  	  }
	  	  	}

	  			});
  	  	}
  	getData();
  	setTimeout(function(){DataParser.parse(video_objects)}, 1000)
  },

	parse: function(video_objects_array){

		BerthaObjects = [];
    searchVidArr=[];
    function VideoObject(id, duration, startTime, endTime) {
      this.id = id;
      this.duration= duration;
      this.startTime = startTime;
      this.endTime = endTime;
    }

    function getTime(object) {
      var total_sec, hours, minutes_sec, seconds;
      var timeD = String(object.id.duration)
      var semiformattedTime = timeD.replace("PT","").replace("H",":").replace("M",":").replace("S","");
      var arr = semiformattedTime.split(":");
      if (arr.length === 1) {
        total_sec = parseInt(arr[0]);
      } else if (arr.length === 2) {
        minutes_sec = (parseInt(arr[0]) * 60);
        seconds = parseInt(arr[1]);
        total_sec = minutes_sec + seconds;
      } else {
        hours = (parseInt(arr)[0]*3600)
        minutes_sec = (parseInt(arr[1]) * 60);
        seconds = parseInt(arr[2]);
        total_sec = hours + minutes_sec + seconds;
      }
      return total_sec
    }

    function findId(object) {
      return object.id.videoId
    }

    function randomizeVideoStart(videoStartTime) {
      adjustedTime = videoStartTime - 12
      return Math.floor(Math.random()*adjustedTime + 2)
    }

    function endOfDays(time) {
      return time + 10
    }

    function dataParser(object){
      id = findId(object);
      duration = getTime(object);
      startTime = randomizeVideoStart(duration)
      endTime = endOfDays(startTime)
      BerthaObjects.push(new VideoObject(id, duration, startTime, endTime))
    }

    function parser() {
      video_objects.forEach(function(item) {
        dataParser(item);
      });

      BerthaObjects.forEach(function(obj){
        if (obj.duration > 10){
          searchVidArr.push(obj)
        }
      });
    }
   parser();
	setTimeout(function(){VideoPlayer.main(searchVidArr)}, 1000)
	}

};
$(document).ready(function() {
});