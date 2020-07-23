setInterval(function(){

  //remove hero lasers after they went beyond the top of the screen
  Game.hero_lasers.forEach(laser => {
    if( laser.edge <= Body.zero ){
      remove(Game.hero_lasers, laser)
      Game.unplace(laser.instance)
    }
    else{
      laser.move()
    }
  }, 5)
















})
