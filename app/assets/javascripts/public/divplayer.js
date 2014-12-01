var DivPlayer = {
  counter: 1
};

/* Should be flush to left...no need for indentation */
  DivPlayer.Controller = {
    createAndDestroy: function(){
      /* JS uses camelCaseLikeThis */
      var player_area = document.getElementById('player-area');
      DivPlayer.View.divAppend(player_area,"div","new_player_","inner");
      DivPlayer.View.divRemove(player_area);
    }
  }

  /* Is there a reason you're putting all of this behavior inside of class
   * methods that arent' on a thing that could be initialized? e.g.
   *
   * new DivPlayer.View()
   *
   * You're using divAppend() in a way like a constructor function could be
   * used.
   *
   * e.g.
   *
   * new DivPlayer.View(player_area);
   *
   * expresses "Create a DivPlayer.View, and bind it in at the location of
   * player_area".  It's much less clear what "divAppend" is doing.  Is that
   * appending a div to the view?  Is it appending the view to a div?  WAT?!
   */

  DivPlayer.View = {
    initiallyPlaceDivs: function(num){
      var player_area = document.getElementById('player-area');
      for (var i=0; i<num; i++){
        DivPlayer.View.divAppend(player_area,"div","new_player_","inner");
      }
    },

    divRemove: function(area){
      var div_to_be_deleted = area.firstChild
      div_to_be_deleted.remove();
    },

    divAppend: function(area,eleToCreate,id_name,class_name){
      var ele = document.createElement(eleToCreate);
      ele.setAttribute("id", id_name + DivPlayer.counter);
      ele.setAttribute("class",class_name);
      ele.innerHTML="!!!!REPLACE ME!!!!"; //PLACE YT PLAYER HERE

      area.appendChild(ele);
      DivPlayer.counter ++
    }
  }

//-------------------------------------------------------//
  //
 
/* I might recommend this function being placed in a file called initalize.js
 * so that it stands out as being the place where the whole thing gets going.
 *
 */
window.onload = function(){
  DivPlayer.View.initiallyPlaceDivs(3);
  setInterval(DivPlayer.Controller.createAndDestroy,1000)//time interval will be based on video runtime
  }
