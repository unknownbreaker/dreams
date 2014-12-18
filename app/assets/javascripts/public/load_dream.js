$(document).ready(function() {
  vidArr = $('#dream_data').data('dream');
  if(vidArr !== null && vidArr.length > 0) {
    $('#login').hide();

    setTimeout(function() {
      BackGround.View.blackOut();
      VideoPlayer.main(vidArr);
    }, 3000);
  }
})