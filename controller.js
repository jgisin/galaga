(function($){

  $.extend({
    playSound: function(){
      return $(
        '<audio autoplay="autoplay" style="display:none;">'
          + '<source src="' + arguments[0] + '.mp3" />'
          + '<source src="' + arguments[0] + '.ogg" />'
          + '<embed src="' + arguments[0] + '.mp3" hidden="true" autostart="true" loop="false" class="playSound" />'
        + '</audio>'
      ).appendTo('body');
    }
  });

})(jQuery);
var controller = {

  init: function(){
    controller.makeEnemies();
    $.playSound('sprites/bakmusic');
  },

  direction: "",

  shoot: false,

  soundtrack: function(){
    $.playSound('sprites/bakmusic');
  },

  makeEnemies: function(){
    $.each(model.enemy1Location, function(index1, enemy1){
      view.createEnemy1(index1, enemy1);
    });

    $.each(model.enemy2Location, function(index2, enemy2){
      view.createEnemy2(index2, enemy2);
    });
  },

  checkHitEnemy1: function(){
    $.each(model.laserLocation, function(laser_index, laser){
      $.each(model.enemy1Location, function(enemy_index, enemy){
        if (laser.left < enemy.left + enemy.width &&
           laser.left + laser.width > enemy.left &&
           laser.top < enemy.top + enemy.height &&
           laser.height + laser.top > enemy.top){

          model.score += 50;
          controller.removeEnemy1(enemy_index);
          controller.removeLaser(laser_index);

        }
      })
    })
  },

  checkHitEnemy2: function(){
    $.each(model.laserLocation, function(laser_index, laser){
      $.each(model.enemy2Location, function(enemy_index, enemy){
        if (laser.left < enemy.left + enemy.width &&
           laser.left + laser.width > enemy.left &&
           laser.top < enemy.top + enemy.height &&
           laser.height + laser.top > enemy.top){

          model.score += 50;
          controller.removeEnemy2(enemy_index);
          controller.removeLaser(laser_index);

        }
      })
    })
  },

  checkHit: function(){
    controller.checkHitEnemy2();
    controller.checkHitEnemy1();

  },

  sendScore: function(){
    view.updateScore(model.score);
  },

  moveShip: function(){
    if(controller.direction === "right"){
      view.renderShip(model.shipLocation += 10);
    }else if (controller.direction === "left"){
      model.shipLocation -= 10;
      view.renderShip(model.shipLocation);
    }else{
      view.renderShip(model.shipLocation)
    }
  },

  shootLaser: function(){
    if (controller.shoot === true){
      view.createLaser(model.laserCount, model.shipLocation);
      model.laserCount++;
      model.laserLocation.push({left: model.shipLocation, top: 650, width: 35, height: 35 });
      controller.shoot = false;
      $.playSound('sprites/fire')
    }
  },

  animateLaser: function(){
    $.each(model.laserLocation, function(index, laser){
      if(laser.top !== "d"){
        view.renderLaser(index, model.laserLocation[index].top -= 5);
        controller.laserBound();
      }
    })
  },

  removeLaser: function(index){
    view.deleteLaser(index);
    model.laserLocation[index].top = "d";
    model.laserLocation[index].left = "d";
  },

  removeEnemy1: function(index){
    view.deleteEnemy1(index);
    model.enemy1Location[index].top = "d";
    model.enemy1Location[index].left = "d";
  },

  removeEnemy2: function(index){
    view.deleteEnemy2(index);
    model.enemy2Location[index].top = "d";
    model.enemy2Location[index].left = "d";
  },

  laserBound: function(){
    $.each(model.laserLocation, function(index, laser){
      if(laser.top < 0){
        controller.removeLaser(index);
      }
    })
  },

  enemyAnimations: function(){
    view.animations.enemy1Animate();
    view.animations.enemy2Animate();
  },

  renderEnemies: function(){
    $.each(model.enemy1Location, function(index, enemy1){
      view.renderEnemy1(index, enemy1);
    });
    $.each(model.enemy2Location, function(index, enemy1){
      view.renderEnemy2(index, enemy1);
    })
  },

  moveEnemies: function(){

    if(model.tempEnemy <= 0 && model.enemyDirection === "left"){
      model.enemyDirection = "right";
    }
    else if(model.tempEnemy === 15 && model.enemyDirection === "right"){
      model.enemyDirection = "left";
    }
    if(model.enemyDirection === "left"){
      model.tempEnemy--;
    }else if(model.enemyDirection === "right"){
      model.tempEnemy++;
    }

    $.each(model.enemy1Location, function(index, enemy1){
      if(model.enemyDirection === "left"){
        enemy1.left -= 10;
      }else if (model.enemyDirection === "right"){
        enemy1.left += 10;
      }
    })

    $.each(model.enemy2Location, function(index, enemy2){
      if(model.enemyDirection === "left"){
        enemy2.left -= 10;
      }else if (model.enemyDirection === "right"){
        enemy2.left += 10;
      }
    })

  },

  checkWin: function(){
    if($('.enemy_1').length === 0 && $('.enemy_1').length === 0){
      view.renderWin();
    }
  },

  update: function(){
    setInterval(controller.checkWin, 25);
    setInterval(controller.soundtrack, 17000)
    setInterval(controller.sendScore, 25);
    setInterval(controller.enemyAnimations, 500);
    setInterval(controller.moveShip, 25);
    setInterval(controller.renderEnemies, 25);
    setInterval(controller.moveEnemies, 250);
    setInterval(controller.shootLaser, 25);
    setInterval(controller.animateLaser, 25);
    setInterval(controller.checkHit, 25);
  }

}
