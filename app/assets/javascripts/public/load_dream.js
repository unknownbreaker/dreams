$(document).ready(function() {
  vidArr = $('#dream_data').data('dream');
  console.log("Returned array of JSON from backend. It was originally stored as an array of hashes but was converted to JSON after getting to the client side.")
  console.log(vidArr);
  if(vidArr !== null && vidArr.length > 0) {
    $('#login').hide();

    setTimeout(function() {
      BackGround.View.blackOut();
      VideoPlayer.main(vidArr);
    }, 3000);
  }
})