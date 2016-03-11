var controller = {

  init: function(){

  },

  direction: "",

  shoot: false,

  moveShip: function(){
    if(controller.direction === "right"){
      view.renderShip(model.shipLocation += 20);
      controller.direction = "";
    }else if (controller.direction === "left"){
      model.shipLocation -= 20;
      view.renderShip(model.shipLocation);
      controller.direction = "";
    }else{
      view.renderShip(model.shipLocation)
    }
  },

  shootLaser: function(){
    if (controller.shoot === true){
      view.createLaser(model.laserCount, model.shipLocation);
      model.laserCount++;
      model.laserLocation.push(490);
      controller.shoot = false;
    }
  },

  animateLaser: function(){
    $.each(model.laserLocation, function(index, laser){
      if(laser !== "d"){
        view.renderLaser(index, model.laserLocation[index] -= 5);
        controller.laserBound();
      }
    })
  },

  laserBound: function(){
    $.each(model.laserLocation, function(index, laser){
      if(laser < 0){
        view.deleteLaser(index);
        model.laserLocation[index] = "d";
      }
    })
  },

  update: function(){
    setInterval(controller.moveShip, 25);
    setInterval(controller.shootLaser, 25);
    setInterval(controller.animateLaser, 25);
  }

}
