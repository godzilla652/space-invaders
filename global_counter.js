setInterval(function(){

  Game.hero_lasers.forEach(laser => {
    if( laser.edge <= Body.zero ){
      remove(Game.hero_lasers, laser)
      Game.unplace(laser.instance)
      
    }
    else{
      laser.move()
    }

  }, 2)


})
