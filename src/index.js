import _ from 'lodash'
import $ from '../node_modules/jquery/dist/jquery.js'
import './styles/style.css'

// hero object
let hero = {
  width: 65,
  height: 65
}
//global vars object
window.globalVars = {
  mainIntervalId: undefined,
  isPaused: false,
  delta: 15,
  interval: 2000,


  //write monitor
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
  }
}


//Mouse move event
$(window).mousemove(function(event) {
  //move hero
  $("#hero").css("left", event.pageX - hero.width/2)
  $("#hero").css("top", event.pageY - hero.height/2)
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


let map = [
           [0,1,1,1,0,1],
           [1,0,1,1,0,0],
           [1,0,0,1,0,0,]
         ]

for ( let rowIndex in map){
  for ( let arrayIndex in map[rowIndex]){
    // console.log(map[rowIndex][arrayIndex])
  }
}

function mainInterval(){
  let mainIntervalId = undefined

  mainIntervalId = window.setInterval(function(){
    //get old coordinates
    let oldy = $('#mapWrapper').position().top
    //delta coordinates
    let newy = oldy + globalVars.delta
    //set new coordinates
    $('#mapWrapper').css("top", newy)
  }, globalVars.interval)

  return mainIntervalId
}


//set globalVars.mainIntervalId and continue executing programm
function start(){
    globalVars.mainIntervalId = mainInterval()
}


//entry point
start()
globalVars.clearMonitor()
globalVars.updateMonitor()


//add stone to mapWrapper
$("#mapWrapper").append(`<div class="stone block floating" id="t1"></div>`)
