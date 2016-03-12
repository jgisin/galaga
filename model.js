var model = {
  tempEnemy: 10,
  enemyDirection: "left",
  
  shipLocation: 300,

  laserLocation: [],
  laserCount: 0,

  enemy1Location: [{top: 100, left: 300, width: 50, height: 60}, {top: 100, left: 400, width: 50, height: 60}, {top: 100, left: 500, width: 50, height: 60}, {top: 100, left: 600, width: 50, height: 60}, {top: 100, left: 700, width: 50, height: 60}, {top: 100, left: 800, width: 50, height: 60}, {top: 100, left: 900, width: 50, height: 60}, {top: 100, left: 1000, width: 50, height: 60}, {top: 240, left: 300, width: 50, height: 60}, {top: 240, left: 400, width: 50, height: 60}, {top: 240, left: 500, width: 50, height: 60}, {top: 240, left: 600, width: 50, height: 60}, {top: 240, left: 700, width: 50, height: 60}, {top: 240, left: 800, width: 50, height: 60}, {top: 240, left: 900, width: 50, height: 60}, {top: 240, left: 1000, width: 50, height: 60}],

  enemy2Location: [{top: 170, left: 300, width: 50, height: 60}, {top: 170, left: 400, width: 50, height: 60}, {top: 170, left: 500, width: 50, height: 60}, {top: 170, left: 600, width: 50, height: 60}, {top: 170, left: 700, width: 50, height: 60}, {top: 170, left: 800, width: 50, height: 60}, {top: 170, left: 900, width: 50, height: 60}, {top: 170, left: 1000, width: 50, height: 60}, {top: 310, left: 300, width: 50, height: 60}, {top: 310, left: 400, width: 50, height: 60}, {top: 310, left: 500, width: 50, height: 60}, {top: 310, left: 600, width: 50, height: 60}, {top: 310, left: 700, width: 50, height: 60}, {top: 310, left: 800, width: 50, height: 60}, {top: 310, left: 900, width: 50, height: 60}, {top: 310, left: 1000, width: 50, height: 60}],

  enemyCount: 0,

  score: 0,

}
