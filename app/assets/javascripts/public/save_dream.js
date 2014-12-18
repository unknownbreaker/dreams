SaveDream = {
  save: function(video_data) {
    $.ajax({
      url: '/dreams',
      type: 'POST',
      dataType: 'JSON',
      data: { dream: video_data },
      success: function(response) {
        console.log("SUCCESS!")
        console.log(response.key);
        // console.log(response.video_properties.dream);
      }
    })
  }
}
