class Game {

    constructor(){

    }
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState=data.val()
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state 
        })
    }
    start(){
        if (gameState===0) {
            player=new Player ()
            player.getCount()
            form=new Form()
            form.display(); 
        }
        car1=createSprite(100,200)
        car1.addImage(car1i)
        car2=createSprite(300,200)
        car2.addImage(car2i)
        car3=createSprite(500,200)
        car3.addImage(car3i)
        car4=createSprite(700,200)
        car4.addImage(car4i) 
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
        background(ground)
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        Player.getPlayerInfo()
        if (allPlayers!=undefined) {
            var x=175,y
            var index=0 
            for (var plr in allPlayers){
            x=x+200
            y=displayHeight-allPlayers[plr].distance
            
            index=index+1
            cars[index-1].x=x
            cars[index-1].y=y
            if (index===player.index) {
              cars[index-1].shapeColor="red"
              camera.position.x=displayWidth/2
              camera.position.y=cars[index-1].y
            }
            else{
                cars[index-1].shapeColor="black"
            }        
            }
        }
if(keyIsDown(UP_ARROW)&&player.index!=0){
       player.distance=player.distance+10
       player.update()
       
}
if (player.distance>3860) {
    gameState=2
}
drawSprites();
    }
    end(){
        console.log("game over")
    }
}