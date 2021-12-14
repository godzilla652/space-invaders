import _ from 'lodash'
import $ from '../node_modules/jquery/dist/jquery.js'
import './styles/style.css'


// hero object
let hero = {
  width: 50,
  height: 50
}
//global vars object
window.globalVars = {
  //global variables
  mainIntervalId: undefined,
  isPaused: false,
  delta: 15,
  interval: 100,

  //functions
  updateMonitor: function (){
    //collect keys, values
    let keys = Object.keys(globalVars)
    let values = Object.values(globalVars)
    //append values per key
    for (let index in keys){
      if ( typeof values[index] != 'function'){
        $("#monitor > #monitor-info").append(`<div id="monitor-info-wrapper"><div><span class="space-right">${keys[index]}:</span><span>${values[index]}</span></div></div>`)
      }
    }
  },
  //clear Monitor
  clearMonitor: function(){
    if ( $("#monitor > #monitor-info > #monitor-info-wrapper") == true ){
      $("#monitor > #monitor-info > #monitor-info-wrapper").remove()
    }
  },
  pressPause: function(){
    this.isPaused = !this.isPaused
    //
    //clearMonitor
    $("#monitor > #monitor-info > #monitor-info-wrapper").remove()
    //updateMonitor
    let keys = Object.keys(globalVars)
    let values = Object.values(globalVars)
    for (let index in keys){
      if ( typeof values[index] != 'function'){
        $("#monitor > #monitor-info").append(`<div id="monitor-info-wrapper"><div><span class="space-right">${keys[index]}:</span><span>${values[index]}</span></div></div>`)
      }
    }
  },

}


//Mouse move event
$(window).mousemove(function(event) {
  //do not let go out of bounds mapWrapper
  console.log('mapWrapper top: ', $("#mapWrapper").position().top)
  console.log('mapWrapper left: ', $("#mapWrapper").position().left)
  if ( ( event.pageX - hero.width/2 ) < $("#mapWrapper").position().left) {
    $("#hero").css("left", $("#mapWrapper").position().left + 1)
    return
  }
  else if (event.pageY - hero.height < $('#mapWrapper').position().top) {
    $("#hero").css("top", $("#mapWrapper").position().top + 1)
    return
  }
  else if (event.pageX + hero.width/2 > $('#mapWrapper').position().left + $('#mapWrapper').width()) {
    $("#hero").css("left", $("#mapWrapper").position().left + $("#mapWrapper").width() - hero.width)
    return
  }
  //find coords
  let left = event.pageX - hero.width/2
  let top = event.pageY - hero.height/2
  //move hero
  $("#hero").css("left", left)
  $("#hero").css("top", top)
  //update hero's coordinates
  globalVars.heroLeft = _.floor(left)
  globalVars.heroTop = _.floor(top)
  //routine
  //clearMonitor
  $("#monitor > #monitor-info > #monitor-info-wrapper").remove()
  //updateMonitor
  let keys = Object.keys(globalVars)
  let values = Object.values(globalVars)
  for (let index in keys){
    if ( typeof values[index] != 'function'){
      $("#monitor > #monitor-info").append(`<div id="monitor-info-wrapper"><div><span class="space-right">${keys[index]}:</span><span>${values[index]}</span></div></div>`)
    }
  }

});

//Mouse click event
$(window).click(function(event){
  // console.log('clicked')
})
//Keyboardpress event
$(window).keypress(function(event){
  if ( event.which == 32 ){
    //if is paused, then unpause
    if ( globalVars.isPaused ){
      start()
    }
    //if is not paused, then pause
    else {
      window.clearInterval(globalVars.mainIntervalId)
    }
    //reverse isPaused
    globalVars.pressPause()
  }
})



//1536
//2,217.6



//map x = 22, y = 11
let map = [
           [0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0],
           [1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0],

           [0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0],
           [1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1],
           [1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0],
         ]

let stones = []
//fill mapWrapper from map
for ( let rowIndex in map){
  for ( let arrayIndex in map[rowIndex]){
    let value = map[rowIndex][arrayIndex]
    //create block, according to position
    if (value == 1){
      let stone = $(`<div class="stone block floating" row="${rowIndex}" col="${arrayIndex}"></div>`)
      //rowIndex, arrayIndex
      let current_left = arrayIndex * 65
      let current_top = rowIndex * 65

      $(stone).css("left", `${current_left}px`)
      $(stone).css("top", `${current_top}px`)

      $("#mapWrapper").append($(stone))
      stones.push($(stone))
      //
    }
    else {
      // exit creating block
    }
  }
}
// console.log(stones)
// console.log(_.floor($(stones[15]).position().left))
// console.log(_.floor($(stones[15]).position().top))

// console.log(1 == $(stones[15]).attr("row"))
// console.log(55 ==  $(stones[15]).attr("col"))


// main timer
function mainInterval(){
  let mainIntervalId = undefined
  mainIntervalId = window.setInterval(function(){
    //get old coordinates
    // let oldy = $('#t1').position().top
    // //delta coordinates
    // let newy = oldy + globalVars.delta
    // //set new coordinates
    // $('#t1').css("top", newy)


    // console.log('left: ', $("#t1").position().left)
    // console.log('top: ', $("#t1").position().top)
    // console.log('width: ', $("#t1").width())
    // console.log('height: ', $("#t1").height())


  }, globalVars.interval)

  return mainIntervalId
}


function start(){
    globalVars.mainIntervalId = mainInterval()
}




//entry point
start()
globalVars.clearMonitor()
globalVars.updateMonitor()
