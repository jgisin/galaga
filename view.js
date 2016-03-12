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

  deleteEnemy1: function(id){
    $( '[data-enemy1="'+ id +'"]' ).remove();
  },

  deleteEnemy2: function(id){
    $( '[data-enemy2="'+ id +'"]' ).remove();
  },

  createEnemy1: function(id, location){
    $( 'body' ).append($('<div class="enemy_1" data-enemy1="' + id + '"></div>'))
    $('.enemy_1').last().css('top', location.top + "px").css('left', location.left + "px")
  },

  createEnemy2: function(id, location){
    $( 'body' ).append($('<div class="enemy_2" data-enemy2="' + id + '"></div>'))
    $('.enemy_2').last().css('top', location.top + "px").css('left', location.left + "px")
  },

  renderEnemy1: function(id, location){
    $( '[data-enemy1="'+ id +'"]' ).css('left', location.left + "px")
  },

  renderEnemy2: function(id, location){
    $( '[data-enemy2="'+ id +'"]' ).css('left', location.left + "px")
  },

  renderWin: function(){
    $( 'body' ).append($('<div class="arcade" id="win">YOU WIN!...FOR NOW</div>'))
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

    enemy2Animate: function(){
      var text = $('.enemy_2').css('background-image').split('/')
      if(text[text.length - 1] === 'enemy_2.png")'){
        $('.enemy_2').css('background-image', "url('file:///Users/jgisin/Sites/Viking/Galaga/sprites/enemy_2A.png')")
      }else {
        $('.enemy_2').css('background-image', "url('file:///Users/jgisin/Sites/Viking/Galaga/sprites/enemy_2.png')")
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
