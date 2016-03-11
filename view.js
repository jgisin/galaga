var view = {

  init: function(){
    view.eventListeners.keypressListener();
  },

  renderShip: function(location){
    $('.ship').css('left', location + "px")
  },

  createLaser: function(id, init_location){
    $( 'body' ).append($('<div class="laser"></div>'))
    $('.laser').last().css('top', 490 + "px").css('left', init_location + "px")
    .attr('data-id', id)
  },

  renderLaser: function(id, location){
    $( '[data-id="'+ id +'"]' ).css('top', location + "px")
  },

  deleteLaser: function(id){
    $( '[data-id="'+ id +'"]' ).remove();
  },

  eventListeners: {
    keypressListener: function(){
      $( document ).keydown(function(e) {
        switch(e.which) {

          case 32: // space
          controller.shoot = true;
          break;

          case 37: // left
          controller.direction = "left";
          break;

          case 39: // right
          controller.direction = "right";
          break;
        }
      })
    }//end keypressListener
  }//end eventListeners
}
