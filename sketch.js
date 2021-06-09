var playerCount=0, database;
var gameState=0;
var form , player , game ;
var allPlayers ,ground,track;
var car1,car2,car3,car4,cars,car1i,car2i,car3i,car4i ;
function preload() {
  car1i=loadImage("images/car1.png")
  car2i=loadImage("images/car2.png")
  car3i=loadImage("images/car3.png")
  car4i=loadImage("images/car4.png")
  ground=loadImage("images/ground.png")
  track=loadImage("images/track.jpg")
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
  game=new Game()
  game.getState()
    game.start()
  
  
}

function draw(){
  if (playerCount===4) {
    game.updateState(1)
  }
    if (gameState===1) {
      clear()
      game.play()
    }
   if(gameState===2){
     game.end()
   }
  
}
