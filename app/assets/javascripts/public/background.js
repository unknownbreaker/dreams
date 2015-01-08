var BackGround = {}

BackGround.View ={
  blackOut: function(){
    $('#big-video-wrap').fadeOut('slow');
    $('#lean_overlay').fadeOut('slow');
  },

  reAppear: function(){
    $('#big-video-wrap').fadeIn('slow');
    loginFadeIn();
    $("#error-novideos").fadeOut('fast');
    $('#menu-toggle').fadeIn('slow');
  },

  dreamHasEnded: function(){

   if('undefined' !== typeof token){
   var logout = "https://accounts.google.com/o/oauth2/revoke?token=" + token;
   console.log("Wake up " + token);
   $.ajax({
      type: 'GET',
      url: logout,
      async: false,
      contentType: "application/json",
      dataType: 'jsonp',
      success: function(nullResponse) {
        endModal();
      },
      error: function(e) {
      }
    });
  } else {
    endModal();
  }
   function endModal() {
    $("#sign_in_btn_text, #random_btn_text ").hide();
    $("#save_btn_text, #discard_btn_text ").show();
    $("#modal-header").text("Keep your Dream")
    $('.signin').text("Save your Dream");
    $('.random').text("Discard your Dream");
    $("#dream-modal").show();
    $('#save_btn_text, #discard_btn_text').click(function(){
      location.reload ();
    });
  };
 }
}

$(document).ready(function(){
  var BV;
  $(function() {
    // initialize BigVideo
    BV = new $.BigVideo();
    BV.init();
    BV.show(['videos/vid1.mp4','videos/vid2.mp4','videos/vid3.mp4','videos/vid4.mp4','videos/vid5.mp4','videos/vid6.mp4']);
    });
});
