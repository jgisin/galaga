var view = {

  init: function(){
    view.eventListeners.keypressListener();
    view.eventListeners.keyUpListener();
  },

  updateScore: function(score){
    $('#score').text(score);
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

  deleteEnemy: function(id){
    $( '[data-enemy="'+ id +'"]' ).remove();
  },

  createEnemy1: function(id, location){
    $( 'body' ).append($('<div class="enemy_1" data-enemy="' + id + '"></div>'))
    $('.enemy_1').last().css('top', location.top + "px").css('left', location.left + "px")
  },

  animations: {
    enemy1Animate: function(){
      var text = $('.enemy_1').css('background-image').split('/')
      if(text[text.length - 1] === 'enemy_1.png")'){
        $('.enemy_1').css('background-image', "url('file:///Users/jgisin/Sites/Viking/Galaga/sprites/enemy_1A.png')")
      }else {
        $('.enemy_1').css('background-image', "url('file:///Users/jgisin/Sites/Viking/Galaga/sprites/enemy_1.png')")
      }
    },
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
    },//end keypressListener

    keyUpListener: function(){
      $( document ).keyup(function(e) {
        switch(e.which){
          case 37: // left
          controller.direction = "";
          break;

          case 39: // right
          controller.direction = "";
          break;
        }
      })
    }//end keyUpListener

  }//end eventListeners
}
