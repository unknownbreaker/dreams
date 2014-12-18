SaveDream = {
  save: function(video_data) {
    $.ajax({
      url: '/dreams',
      type: 'POST',
      dataType: 'JSON',
      data: { dream: video_data },
      success: function(response) {
        console.log("SUCCESS!");
        console.log("This is the generated key that will be stored in another column in the dream model: ", response.key);
        // console.log(response.video_properties.dream);
      }
    })
  }
}
