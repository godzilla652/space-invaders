class Game {

  static hero_laser_left
  static hero_laser_top
  static hero_lasers = []

  // static enemy_lasers = []
  // static enemy_counter = 0



  static place(instance){
    $('body').append(instance)
  }
  static unplace(instance){
    instance.remove()
  }

  constructor(){
    this.enemies_counter = 0
    this.enemies = []
  }






  create_hero(){
    this.hero = new Hero()
  }
  create_enemy(){
    this.enemies.push(new Enemy())
  }
}
