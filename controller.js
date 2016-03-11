var controller = {

  init: function(){
    controller.makeEnemies();
  },

  direction: "",

  shoot: false,

  makeEnemies: function(){
    $.each(model.enemyLocation, function(index, enemy){
      view.createEnemy1(index, enemy);
    })
  },

  checkHit: function(){
    $.each(model.laserLocation, function(laser_index, laser){
      $.each(model.enemyLocation, function(enemy_index, enemy){
        if (laser.left < enemy.left + enemy.width &&
           laser.left + laser.width > enemy.left &&
           laser.top < enemy.top + enemy.height &&
           laser.height + laser.top > enemy.top){
          model.score += 50;
          controller.removeEnemy(enemy_index);
          controller.removeLaser(laser_index);
        }
      })
    })
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
      model.laserLocation.push({left: model.shipLocation, top: 490, width: 25, height: 30 });
      controller.shoot = false;
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

  removeEnemy: function(index){
    view.deleteEnemy(index);
    model.enemyLocation[index].top = "d";
    model.enemyLocation[index].left = "d";
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
  },

  update: function(){
    setInterval(controller.sendScore, 25);
    setInterval(controller.enemyAnimations, 500);
    setInterval(controller.moveShip, 25);
    setInterval(controller.shootLaser, 25);
    setInterval(controller.animateLaser, 25);
    setInterval(controller.checkHit, 25);
  }

}
