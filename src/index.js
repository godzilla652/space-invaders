import _ from 'lodash'
import $ from '../node_modules/jquery/dist/jquery.js'


console.log('test')
let hero = {
  width: 65,
  height: 65
}

//Mouse move event
$(window).mousemove(function(event) {
  //move hero
  $("#hero").css("left", event.pageX - hero.width/2)
  $("#hero").css("top", event.pageY - hero.height/2)
});
//Mouse click event
$(window).click(function(event){
  console.log('clicked')
})


//1536 - 23.63
//739.2 - 11.37




function main_timer(){
  let delta = 15
  setInterval(function(){
    console.log('timer')
    //get old coordinates
    let oldy = $('.block2').position().top
    console.log(oldy)
    //delta coordinates
    let newy = oldy + delta
    console.log('new: ', newy)
    //set new coordinates
    $('.block2').css("top", newy)
  }, 2000)
}
main_timer()
