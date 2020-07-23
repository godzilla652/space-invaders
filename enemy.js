class Enemy {

  constructor(){


    this.instance = $('<div class="enemy"></div>')
    $(this.instance).css("left","20px")
    $(this.instance).css("top","20px")






    game.enemies.push(this)
    Game.place(this.instance)
  }



  //remove from html
  remove(){
    Game.unplace(this.instance)
  }
}
