$('body').keydown(e => {
  if ($('.hero').length != 0){
    let button = e.keyCode
    if(button == 37){
      game.hero.left()
    }
    if(button == 38){
      game.hero.up()
    }
    if(button == 39){
      game.hero.right()
    }
    if(button == 40){
      game.hero.down()
    }
    if(button == 32){
      game.hero.shoot()
    }

  }

})
