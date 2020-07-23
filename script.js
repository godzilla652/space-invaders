class Body {
  static width = $('body').width()
  static height = $('body').height()
  static zero = 0
}



class Hero {
  constructor(){
    $('body').append('<div class="hero"></div>')
    this.width = $('.hero').width()
    this.height = $('.hero').height()
    this.instance = $('.hero')

    this.topcoord = $('.hero').position().top
    this.leftcoord = $('.hero').position().left
  }
  //left right
  left(){
    let left = $('.hero').position().left
    left -= 25
    if(left > 0){
      $('.hero').css('left', `${left}px`)
      //refresh coords
      this.leftcoord = left
    }
  }
  right(){
    let left = $('.hero').position().left
    left += 25
    if(left < Body.width - this.width){
      $('.hero').css('left', `${left}px`)
      //refresh coords
      this.leftcoord = left
    }
  }
  //up down
  up(){
    let top = $('.hero').position().top
    top -= 25
    if(top > 0){
      $('.hero').css('top', `${top}px`)
      //refresh coords
      this.topcoord = top
    }
  }
  down(){
    let top = $('.hero').position().top
    top += 25
    if(top < Body.height - this.height){
      $('.hero').css('top', `${top}px`)
      //refresh coords
      this.topcoord = top
    }
  }
  shoot(){
    var laser = new HeroLaser(game.left, game.hero.top, game.hero.width)
  }
  remove(){
    this.instance.remove()
  }
}


class HeroLaser {
  constructor(pleft, ptop, pwidth){
    this.width = 17
    this.height = 17
    this.topcoord
    this.leftcoord
    this.edge

    this.instance = $('<div class="herolaser"></div>') //jquery object

    $(this.instance).css('left', `${game.hero.leftcoord + (game.hero.width/2) - (this.width/2)}px`)
    $(this.instance).css('top', `${game.hero.topcoord}px`)
    this.leftcoord = game.hero.leftcoord + (game.hero.width/2) - (this.width/2)
    this.topcoord = game.hero.topcoord
    this.edge = game.hero.topcoord

    Game.hero_lasers.push(this)
    Game.place(this.instance)

    }
  move(){

        $(this.instance).css('top', `${this.topcoord - 5}px`)
        this.topcoord = this.topcoord - 5
        this.edge = this.topcoord + this.height

        //set coordinates into the game
        Game.hero_laser_top = this.topcoord
        Game.hero_laser_left = this.leftcoord

  }
  remove(){
    this.instance.remove()
  }
}

class EnemyLaser {
  static all = []

  constructor(pleft, ptop, pwidth){
    this.width = 17
    this.height = 17
    this.topcoord
    this.leftcoord
    this.edge

    this.instance = $('<div class="enemylaser"></div>') //jquery object

    //@TODO hero = enemy
    $(this.instance).css('left', `${hero.leftcoord + (hero.width/2) - (this.width/2)}px`)
    $(this.instance).css('top', `${hero.topcoord}px`)
    this.leftcoord = hero.leftcoord
    this.topcoord = hero.topcoord

    EnemyLaser.all.push(this)
    $('body').append(this.instance)
  }

  move(){
    if (this.topcoord > 0){
      this.instance.css('top', `${this.topcoord - 5}px`)
      this.topcoord = this.topcoord - 5
    }
    else{
      remove(HeroLaser.all, this)
      $(this.instance).remove()
    }
  }
}
