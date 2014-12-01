var BackGround = {}

BackGround.View ={
  blackOut: function(){
    setTimeout(function(){$('video#bgvid').fadeOut('slow')},9500);
    // indentation              is                            crazy
      setTimeout(function(){$('#lean_overlay').fadeOut('slow')},10000);
  }
}
